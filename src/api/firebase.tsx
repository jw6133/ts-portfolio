import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import {
  DocumentData,
} from "firebase/firestore";
import {
  getDatabase,
  ref as databaseRef,
  set,
  get,
  child,
} from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

// 자동 로그인 방지
provider.setCustomParameters({
  prompt: "select_account",
});

export interface User extends FirebaseUser {
  isAdmin: boolean;
}

// 구글 로그인 function
export async function googleLogin(): Promise<User | null> {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user as User;
    const isAdmin = await checkAdmin(user);
    user.isAdmin = isAdmin;
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 구글 로그아웃 function
export async function googleLogOut(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
}

// 로그인 시 새로고침해도 로그인을 계속 유지
export function onUserState(callback: (user: User | null) => void): void {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const updateUser = await adminUser(user as User);
      callback(updateUser);
    } else {
      callback(null);
    }
  });
}

// admin user 구분
async function adminUser(user: User): Promise<User> {
  const isAdmin = await checkAdmin(user);
  return { ...user, isAdmin };
}

async function checkAdmin(user: FirebaseUser): Promise<boolean> {
  try {
    if (!user.email) {
      throw new Error('User email is null');
    }
    const emailKey = user.email.replace(/\./g, ','); // 이메일 주소에서 .을 ,로 대체
    const dbRef = databaseRef(database, `admin/${emailKey}`);
    const snapshot = await get(dbRef);
    console.log(`Checking admin status for: ${emailKey}`);
    return snapshot.exists();
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

// 포트폴리오 정보(사진, 제목, 글) 업로드 (Realtime Database 사용)
export async function addPortfolioData(
  title: string,
  tag: string,
  tag2: string,
  photo: string,
  text1: string,
  table: DocumentData,
  text2: string,
  text3: string,
): Promise<void> {
  try {
    const dbRef = databaseRef(database, 'portfolio_data');
    const snapshot = await get(dbRef);

    let index = 0;
    if (snapshot.exists()) {
      const data = snapshot.val();
      index = Object.keys(data).length;
    }

    await set(databaseRef(database, `portfolio_data/${index}`), {
      title,
      tag,
      tag2,
      photo,
      text1,
      table,
      text2,
      text3,
    });
    console.log("Document successfully written!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// 파일 업로드 function
export async function uploadFile(file: File): Promise<string> {
  const storageReference = storageRef(storage, `images/${uuidv4()}`);
  await uploadBytes(storageReference, file);
  return getDownloadURL(storageReference);
}

// 포트폴리오 정보 가져오기 (Realtime Database 사용)
export async function getPortfolioData(): Promise<DocumentData[]> {
  try {
    console.log("Fetching portfolio data...");
    const dbRef = databaseRef(database);
    const snapshot = await get(child(dbRef, 'portfolio_data'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Fetched data: ", data);
      return Object.keys(data).map(key => ({ id: key, ...data[key] }));
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error("Error fetching portfolio data: ", error);
    return [];
  }
}

//Resume 데이터 가져오기
export async function getResumeData(): Promise<DocumentData | null> {
  try {
    console.log("Fetching Resume data...");
    const dbRef = databaseRef(database);
    const snapshot = await get(child(dbRef, 'resume_data/0'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Fetched data: ", data);
      return { id: '0', ...data };
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching resume data: ", error);
    return null;
  }
}

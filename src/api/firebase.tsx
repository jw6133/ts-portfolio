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
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  DocumentData,
} from "firebase/firestore";
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
const firestore = getFirestore(app);
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
    const q = query(collection(firestore, "admin"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// 포트폴리오 정보(사진, 제목, 글) 업로드
export async function addPortfolioData(
  title: string,
  tag: string,
  photo: string,
  text1: string,
  table: DocumentData,
  text2: string
): Promise<void> {
  try {
    await addDoc(collection(firestore, "portfolio_data"), {
      title,
      tag,
      photo,
      text1,
      table,
      text2,
    });
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

// 포트폴리오 정보 가져오기
export async function getPortfolioData(): Promise<DocumentData[]> {
  try {
    console.log("Fetching portfolio data...");
    const querySnapshot = await getDocs(collection(firestore, "portfolio_data"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("Fetched data: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching portfolio data: ", error);
    return [];
  }
}

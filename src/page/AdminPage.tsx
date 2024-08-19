import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { styled } from '@linaria/react';
import { addPortfolioData, onUserState, googleLogin, googleLogOut, uploadFile, User } from '../api/firebase';
import Head from '../components/Head';

const AdminPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [tag2, setTag2] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [text1, setText1] = useState('');
  const [table, setTable] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  useEffect(() => {
    onUserState(setUser);
  }, []);

  const handleLogin = async () => {
    try {
      const user = await googleLogin();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = async () => {
    await googleLogOut();
    setUser(null);
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (user && user.isAdmin) {
      let photoURL = '';
      if (photoFile) {
        photoURL = await uploadFile(photoFile);
      }
      const tableData = JSON.parse(table);
      await addPortfolioData(title, tag, tag2, photoURL, text1, tableData, text2, text3);
      setTitle('');
      setTag('');
      setTag2('');
      setPhotoFile(null);
      setText1('');
      setTable('');
      setText2('');
      setText3('');
      alert('Data added successfully!');
    } else {
      alert('You are not authorized to add data.');
    }
  };

  if (!user) {
    return (
      <>
        <Head/>
        <Container>
          <h2>Admin Login</h2>
          <Button onClick={handleLogin}>Login with Google</Button>
        </Container>
      </>
    );
  }

  if (!user.isAdmin) {
    return (
      <>
        <Head/>
        <Container>
          <h2>Access Denied</h2>
          <p>You do not have permission to access this page.</p>
          <Button onClick={handleLogout}>Logout</Button>
        </Container>
      </>
    );
  }

  return (
    <>
      <Head />
      <Container>
        <h2>Add New Portfolio Data</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label>태그 :</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} required />
          </div>
          <div>
            <label>사용 기술 :</label>
            <input type="text" value={tag2} onChange={(e) => setTag2(e.target.value)} required />
          </div>
          <div>
            <label>사진 :</label>
            <input type="file" onChange={handlePhotoChange} required />
          </div>
          <div>
            <label>프로젝트 소개:</label>
            <textarea value={text1} onChange={(e) => setText1(e.target.value)} required></textarea>
          </div>
          <div>
            <label>인원 (JSON 형식):</label>
            <textarea value={table} onChange={(e) => setTable(e.target.value)} required></textarea>
          </div>
          <div>
            <label>프로젝트 내용:</label>
            <textarea value={text2} onChange={(e) => setText2(e.target.value)} required></textarea>
          </div>
          <div>
            <label>성과:</label>
            <textarea value={text3} onChange={(e) => setText3(e.target.value)} required></textarea>
          </div>
          <Button type="submit">Add</Button>
        </Form>
        <Button onClick={handleLogout}>Logout</Button>
      </Container>
    </>
  );
};

export default AdminPage;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 5%;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 10px;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    height: 80px;
    resize: vertical;
  }
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #444;
  }
`;


//backup json
// [
//   {"name":"이주영","role":"서버","description":"서버 및 발표준비","contribution":25},
//   {"name":"김혜연","role":"서버","description":"서버 전반","contribution":30},
//   {"name":"고영우","role":"클라이언트","description":"클라이언트","contribution":15},
//   {"name":"백지웅","role":"클라이언트","description":"클라이언트","contribution":15},
//   {"name":"이현서","role":"클라이언트","description":"클라이언트","contribution":15}
//   ]
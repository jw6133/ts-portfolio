import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Portfolio from './page/Portfolio';
import GlobalStyle from './style/GlobalStyle';
import NotFound from './page/NotFound';
import Portfolio1 from './page/Portfolio_page/Portfolio1';
import Information from './page/information';
import AdminPage from './page/AdminPage';
import Presentation from './page/Presentation';
import Resume from './page/Resume';


function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/info' element={<Information/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/ppt' element={<Presentation/>}/>
          <Route path='/portfolio1' element={<Portfolio1/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

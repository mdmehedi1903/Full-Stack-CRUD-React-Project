import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './page/ListPage';
import SavePage from './page/SavePage';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path="/" element={<ListPage/>}/>
              <Route path="/save" element={<SavePage/>}/>
              <Route path="/update" element={<SavePage/>}/>
          </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
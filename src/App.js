import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useState } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

function App() {
  const [isDark,setIsDark] = useState(false)
  const [currentPage,setCurrentPage] = useState('Body')

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <Body isDark={isDark}/>
      <Footer/>
    </>
  );
}

export default App;

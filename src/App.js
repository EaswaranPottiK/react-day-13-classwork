import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [isDark,setIsDark] = useState(false)
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <Body isDark={isDark}/>
      <Footer/>
    </>
  );
}

export default App;

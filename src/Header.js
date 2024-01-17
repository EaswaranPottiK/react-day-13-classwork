import React, { useState } from 'react'
import './Header.css'

const Header = (props) => {
    function changeTheme(){
        props.setIsDark(!props.isDark)
    }
  return (
    // data-theme="dark"
    <div className='header' data-theme={props.isDark ? "dark":""} style={{display:'flex',justifyContent:'space-between',padding:'1% 1% 1% 1%'}}>
        <div style={{display:'flex',gap:'4vh',alignItems:'center'}}>
            <p style={{color:'#06B6D4',fontSize:'20px',fontWeight:'600'}}>TextUtils</p>
            <p>Home</p>
            <p className='AboutUscontactUs'>About Us</p>
            <p className='AboutUscontactUs'>Contact</p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
            <input type='checkbox' id='check' onChange={changeTheme} value={props.isDark}></input>
            <label htmlFor='check'></label>&nbsp;
            <p>Enable Dark Mode</p>
        </div>
    </div>
  )
}

export default Header
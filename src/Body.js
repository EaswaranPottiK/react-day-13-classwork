import React, { useReducer, useState } from 'react'
import './Body.css'

const Body = (props) => {
  const [text,textDispatch] = useReducer(handleDispatch,'')
  console.log(text)
  function handleDispatch(e){
    console.log('tester called')
    return (e)
    
  }
  return (
    <div className='all' data-theme={props.isDark ? "dark":""} style={{minHeight:'85vh',padding:'15vh 0 0 0'}}>
       <h1 style={{textAlign:'center'}}>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
       <br></br>
       <div style={{margin:'0 10%'}}>
          <h2>Enter Your Text Here:</h2>
          <textarea style={{width:'100%',minHeight:'30vh',border:'1px solid #ced4da', fontSize:'20px'}} value={text} onChange={(e)=>textDispatch (e.target.value)}/>
          <div style={{marginTop:'15px',display:'flex',gap:'10px'}}>
            <button className='textConvertorBtn' style={{backgroundColor:'#0D6EFD'}}>Convert to Uppercase</button>
            <button className='textConvertorBtn' style={{backgroundColor:'#0D6EFD'}}>Convert to Lowercase</button>
            <button className='textConvertorBtn' style={{backgroundColor:'#DC3545'}}>Clear Text</button>
            <button className='textConvertorBtn' style={{backgroundColor:'#198754'}}>Copy to Clipboard</button>
            <button className='textConvertorBtn' style={{backgroundColor:'#0D6EFD'}}>Remove Exta Spaces</button>
          </div>
          <br></br><br></br>
          <h1>Summery of your text</h1>
          <p style={{marginTop:'10px'}}>Number of words: </p>
          <p style={{marginTop:'10px'}}>Number of Charecters: </p>
          <p style={{marginTop:'10px'}}>Reading time: </p>
          <br></br>
          <p style={{textAlign:'center',fontSize:'26px',fontWeight:'600'}}>Preview Document</p>
          <textarea style={{width:'100%',minHeight:'15vh',border:'1px solid #ced4da', fontSize:'20px'}} value={text} readOnly></textarea>
       </div>

    </div>
  )
}

export default Body
import React,{useState} from 'react'
import App from '../App';

export default function Textform(props){
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text has been copied to clipboard','success');
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert('Text has been converted  to Lowercase','success');
  }
  const handleClearText=()=>{
    let newText= ""
    setText(newText)
    props.showAlert('Text has been Cleared','success');
  }
  const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Text has been converted  to Uppercase','success');
    }
  const handleOnChange= (event)=>{
            setText(event.target.value);
        }
  const[text,setText]=useState('');
  return (
    <>
  <div className='container my-3'style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
     <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
     <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#6c757d':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{backgroundColor:props.mode==='dark'?'black':'darkblue'}} >Convert To Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick} style={{backgroundColor:props.mode==='dark'?'black':'darkblue'}} >Convert To Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy} style={{backgroundColor:props.mode==='dark'?'black':'darkblue'}} >Copy The Text</button>
    <button className="btn btn-primary mx-1" onClick={handleClearText} style={{backgroundColor:props.mode==='dark'?'black':'darkblue'}} >Clear The Text</button>
  </div>
  <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>TEXT SUMMARY</h1>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the textbox to preview it here'}</p>
  </div>
    </>
  )
}

import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App(){
  const showAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#6c757d'
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success');
    }
  }

  return (
    <>
    <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container" >
    <Textform heading="Enter The Text To Analyze Below:" mode={mode} showAlert={showAlert} /> 
    {/*<About/>*/}
    </div>
    </> 
  );
}

export default App;

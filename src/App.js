import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import Contactus from './components/Contactus.js';


function App() {
  const [bgColor, setbgColor]=useState('#fff');
  const [textColor, setTextColor]=useState('dark');
  const [text, setText]=useState('Dark');
  const [alert, setAlert]=useState(null); 
  const [navText, setNavText]=useState('light');

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const changeMode=()=>{
    if(bgColor==='#fff'){
      setText('Light');
      setbgColor('dark');
      setTextColor('light');
      showAlert("Enabled dark mode","success")
      document.body.style.backgroundColor='black';
      setNavText('dark')
    }else{
      setbgColor('#fff');
      setTextColor('dark')
      setText('Dark');
      showAlert("Enabled light mode","success")
      document.body.style.backgroundColor='#fff';
      setNavText('light');
    }
  }
  return (
         
      <Router>
        <Navbar bgColor={bgColor} textColor={navText} title='TextWorld' changeMode={changeMode} text={text} color={textColor} />
        <Alert alert={alert}/>
        {/* <TextForm color={bgColor} textColor={textColor} showAlert={showAlert}/> */}
        <Routes>
          <Route path="/about" 
            Component={()=><About textColor={textColor} title='TextWorld'/>} />  
          <Route path="/" 
            Component={()=>
              <TextForm color={bgColor} textColor={textColor} showAlert={showAlert}/>}/>
          <Route path="/contact" 
            Component={()=><Contactus textColor={textColor} />}/>
        </Routes>
        <Footer title='TextWorld'/>    
      </Router> 
    
  );
}

export default App;

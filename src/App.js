// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  
  const [alert, setAlert] = useState(null);


  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  
  // const [btntext, setBtnText] = useState("Enable Dark Mode")

  const toggleMode =() =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      document.body.style.color= 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title= "TextUtils - Dark Mode";
      // setInterval(()=>{                                                title chamkaaaoo
      //   document.title="TextUtils is amazing - Dark Mode"
      // },2000);
      // setInterval(()=>{
      //   document.title="Install TextUtils now!!"
      // },1500);
    }   
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color= 'black';
      showAlert("Light mode has been enabled", "success");
      document.title= "TextUtils - Light Mode";
    }
  }

  return (
    <>
 
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          
          {/* < Route exact path="/"element= { */}
          {/* <Textform heading="Enter the text to analyse: " mode={mode}/> */}
          {/* </Routes> */}
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform heading="Enter the text to analyze" themeMode={mode} showAlert={showAlert} />} />
        </Routes>
    {/* <Textform showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/> */}
    </div>


          </BrowserRouter>



    </>

  );
}

export default App;



// <------ Devansh Dark Mode Button (put before return)---------->

  // const [myStyle, setMyStyle] = useState ({
  //   color: "black",
  //   backgroundColor: 'white'
  // })
  
  
  // const toggleMode=() => {
  //   if(myStyle.color === 'black'){
  //     setMyStyle({
  //       color:"white",
  //       backgroundColor: "black"
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color:"black",
  //       backgroundColor:"white"
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // }

  // <-------------->


import './App.css';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
// import About from './components/About';
import React, {useState} from 'react'
import MyForm from './components/MyForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
    msg : message,
    type : type
  })
  setTimeout(()=>{
    setAlert(null)
  },1000)
  }
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Has Been Enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }
  return (
     <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className="container my-3">           
          {/* <Routes> */}
            <MyForm heading = "Enter text Here" showAlert={showAlert}  mode={mode}/>
            {/* <Route exact path="/about" element={<About mode={mode}/>}></Route> */}
          {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
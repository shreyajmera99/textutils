import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {  
  const [mode , setMode]=useState('light')
 const togglemode = ()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enable", "success")
    }
    else{
      setMode('light')
      showAlert("Light mode has been enable", "success")
      document.body.style.backgroundColor = 'white'

    }
  }
  const[alert , setAlert] = useState(null)

  const showAlert = (msg , type)=>{
    setAlert(
      {
        msg : msg,
        type : type
      }
      
    )
    setTimeout(() => {
        setAlert(null)
    }, 1500);
  }
  return (
    <>
         <Navbar title = "TextUtils" mode={mode} togglemode = {togglemode}/>
         <Alert alert = {alert}/>
         <div className="container my-3">
         <Textform showAlert = {showAlert}heading = "Enter the Text to Analyse" mode={mode}/>

         </div>

    </>

);
}
export default App;
   
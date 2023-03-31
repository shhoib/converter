import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeButton from './darkmode'

function App() {

  const [cur,setcur] = useState('');
  // const [upp,setUpp] = useState()
  const [ttlwrds,seTttlwrds] = useState(0);
  const [lngth,setLngth] = useState(0);

  const [isDarkMode, setIsDarkMode] = useState(false);

   function toggleDarkMode() {
     setIsDarkMode(!isDarkMode);
   }
 
   const backgroundColor = isDarkMode ? '#222' : '#fff';
   const color = isDarkMode ? '#fff' : '#222';
 
  
   const txtarea = (e)=>{
    const x= e.target.value;
    setcur(x);
    seTttlwrds(x.trim().split(/\s+/).length);
    setLngth(x.split(" ").join("").length)
   }

   
   
   const upper = ()=>{
      setcur(cur.toUpperCase());
   }

   const lower = ()=>{
      setcur(cur.toLowerCase());
   }

  //  const ttlwrds = ()=>{
  //    seTttlwrds(ttlwrds.split(" ").join("").length)
  //  }

  //  const lngth= ()=>{
  //     setLngth(lngth.trim().split(" ").length);
  //  }

  return (

    <div id='newdiv' style={{ backgroundColor, color }}>
    
      

    <textarea onChange={txtarea} value={cur}/>

    <br/> 

    <button onClick={upper} >To uppercase</button>

    <button onClick={lower}>To lowercase</button>



    <h2>Total words{ttlwrds}</h2>

    <h2>length{lngth}</h2>

    {/* <DarkModeButton/> */}
    
    <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </div>

    
    )
}

export default App

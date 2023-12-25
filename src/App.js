import { useState } from 'react';
import './App.css';
import Mainpage from './Components/Mainpage';
import Navbar from './Components/Navbar'

function App() {
  const [palette,setPalette] = useState({
    mainBG : "#EAE0D5",
    navBG : "#222325",
    cardBG : "#63ADF2"
  });
  const changePalette = (mbg,nbg,cbg)=>{
    setPalette({
      mainBG : `${mbg}`,
    navBG : `${nbg}`,
    cardBG : `${cbg}`
    })
  }
  return (
    <>
    <div>
      <Navbar name="Palette Viewer" palette = {palette}/>
    </div>
    <div>
      <Mainpage palette = {palette} changeFunc = {changePalette}/>
    </div>
    </>
  );
}

export default App;

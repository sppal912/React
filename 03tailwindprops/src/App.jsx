// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Card from "./component/card";

function App() {
  
  return(
<>
    <Card userName = 'souvik' btnText ='CLICK ME' />,
    <Card userName = 'sourav' btnText ='HIT ME HARDER' />,
    <Card userName = 'surojit' btnText ='PUSH ME' />
</>
  )
}

export default App;

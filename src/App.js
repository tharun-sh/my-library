import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function ToolBar(){

  const [color, setColor] = useState("#000000")

  return (
    <div style={{backgroundColor:color, width:"100%", height:"30px"}}>
      <input type='text' onChange={(e)=>{
        console.log("Tada ... "+e.target.value)
        setColor(e.target.value)
        }}></input>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ToolBar></ToolBar>       
    </div>
  );
}

export default App;

import { json } from 'express';
import './App.css';
import {useState} from 'react';

function App() {
  
  let [actors,setActors] = useState([]);



  let getActorsFromServer = async()=>{
     let reqOptions ={
      method:"GET"
     }
     let JSONData = await fetch("http://localhost:1234/srikanth",reqOptions);
     let JSOData=await JSONData.json();
     setActors(JSOData);  
     console.log(JSOData);
    };
  
  return (
    <div>
    <button onClick={() =>{
      getActorsFromServer();
    }}>srikanthMoive</button>

    

    {actors.map((ele,i)=>{
      return <h2 key={i}>{ele}</h2>;
    })}

    </div>
);
}

export default App;

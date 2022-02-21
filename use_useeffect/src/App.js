import './App.css';
import {useEffect, useState} from "react"

function App() {

  const [datos, setDatos] = useState ([]) //es un array

  useEffect (()=> {
    const url= "https://randomuser.me/api/?results=3";
    const peticion=fetch(url);
    //leer la peticion
    peticion
    .then(e=>e.json())
    .then(lectura=>{
    console.log(lectura)
    lectura.results.map(valor=>{
      setDatos((e)=>  //se usa la operacion spread (...) para formar el array en seyDatos, sin el solo mostraria el ultimo nombre e imagen 
      [...e,<div key={valor.email}>  
        <div>{valor.name.first} {valor.name.last}</div>
        <div>
          <img src={valor.picture.large}/>
        </div>
      </div>])
      console.log(valor.name.first)
    })
    

    
   })
    .catch(()=>console.log("Error")) 
  },[])


  return (
    <>
    {datos}
    </>
  );
}

export default App;

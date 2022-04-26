import {useEffect, useState} from "react";
import './App.css';

function App() {

const [chiste, setchiste]= useState([]);



  useEffect( ()=> {
    //ejecuta una petecion asincrona a la siguiente url (API). al ser asicrono, primero va leer todo y despues realizara la petición.
    const url="https://api.icndb.com/jokes";
    const peticion=fetch(url);  //se realiza la peticion con fetch
    peticion
    .then(datos=> datos.json())
    // otro then encadenado para la lerctura. donde se obtendra los chistes  
    .then(lectura=>{
       
       lectura.value.map(valor=>
        setchiste((e)=> [...e, <div className="ch" key={valor.id}>{valor.id} <br/> {valor.joke}</div>])
        )
        console.log(lectura)

    })
    // si no encuentra la petición.
    .catch(()=>console.log("Error")) 
  },[]) 
  return (
    <>
    {chiste}
    </>
  );
}

export default App;

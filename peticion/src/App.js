import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [chiste, setChiste]=useState("");

 const peticiones = () => {
   const url="https://api.icndb.com/jokes/random";
   const peticion=fetch(url);
   peticion
   .then(valor=>valor.json()) //convertir a lenguaje json
   .then(valor=> {
    console.log(valor);
    setChiste(<div>{valor.value.joke}</div>)
   })
   .catch(()=>console.log("Error"))

 }

 useEffect( ()=> {  //para que la haga la primera vez 

  peticiones();

},[])
  
  
  
  return (
    <>
    {chiste}
    <button onClick={peticiones}>Nuevo Chiste</button>
    </>
  );
}

export default App;

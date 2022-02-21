import './App.css';
import {useEffect, useState} from "react";  //se usara para controlar que solo se corra una vez la peticion de la api, ya que sin el, corre dos veces. cuando se llama y cuando se renderiza 

function App() {
  //inicializar los useStates
  const [nombre, setNombre]=useState("")
  const [imagen, setImagen]=useState("")
  // se introduce el codigo de la peticion dentro de useEffect, para que controle cuantas veces se hara 
  useEffect( ()=> {
    //ejecuta una petecion asincrona a la siguiente url (API). al ser asicrono, primero va leer todo y despues realizara la petición.
    const url="https://randomuser.me/api/";
    const peticion=fetch(url);  //se realiza la peticion con fetch
    //al terminar de procesar la peteción, se indica lo que se quiere hacer
    //realizando una condición de cuando se realizo bien la peticion o no
    peticion
    //con funcion de flecha para que funcione como condicional 
    //si realiza adecuadamente la peticion, se leerran los datos, pero primero se deben convertir en el lenguaje que entienda js, por ejemplo json
    .then(datos=> datos.json())
    // otro then encadenado para la lerctura. donde se obtendra el nombre de la persona 
    .then(lectura=>{
      setNombre(`${lectura.results[0].name.first} ${lectura.results[0].name.last}`)  //lectura y asignacion le nombre en "nombre", se usa las comillas invertidas para ontener el nombre y el apellido en el mismo useState
      setImagen(lectura.results[0].picture.medium) //lectura y asignacion de a ruta de la imagen en "imagen"
      console.log(lectura.results[0].picture.medium)
    })
    // si no encuentra la petición.
    .catch(()=>console.log("Error")) 
  },[]) // en los corchetes es opcional colocar un useState, que indique que cuando cambie este, se realice lo de andentro de useEffect, vacio solo unidca que se haga una vez 
  

  return (
    <>
    <h1>Empleado/a del mes</h1>
    <div>{nombre}</div>
    <div><img src={imagen}/></div>
    
    </>
  );
}

export default App;

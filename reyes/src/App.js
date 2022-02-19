import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const reyesGood=[
    { nombre: "Ataúlfo",
      aficion: "comer toros sin pelar"

  },{ nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo"

  }, { nombre: "Teodorico",
       aficion: "la cría del escarabajo en almíbar"

  }]

  const [contador, setContador]=useState(0);
  const [mensaje, setMensaje]=useState();


  const cambioRey=()=>{
    setContador(contador+1);
    if(contador+1>=reyesGood.length){
      setContador(0);

    }
    setMensaje(<h2>La afición principal de <spam className="rojo">{reyesGood[contador].nombre}</spam> es <spam className="verde">{reyesGood[contador].aficion}</spam></h2>)
  }

  return (
    <div>
      <button onClick={cambioRey}>Cambio de Rey</button>
      <div>{mensaje}</div>
    </div>
  );
}

export default App;

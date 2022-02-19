import './App.css';
import { useState } from 'react';
import Cena from './Cena';



function App() {

  const reyes=[{
    nombre:"Atanagildo",
    color:"darkolivegreen",
    precio: 178,
  },{
    nombre:"Ervigio",
    color:"crimson",
    precio: 179,
  },{
    nombre:"Ataúlfo",
    color:"darkred",
    precio: 81,
  },{
    nombre:"Leogivildo",
    color:"darkmagenta",
    precio:126,
  },{
    nombre: "Recesvinto",
    color: "brown",
    precio: 142,
  }];

  const [total, setTotal] = useState(0);

  return (
    <>
    
      <h1>Total a pagar {total}</h1>
      <div className="cajaCentral">
      <Cena reyes={reyes} setTotal={setTotal}/>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  const cambios=[
    {
      moneda: "Euro",
      cambio: 1,
    },{
      moneda: "Peso argentino",
      cambio: 118.6,
    },{
      moneda: "Peso colombiano",
      cambio: 118.6,
    },{
      moneda: "Dolar",
      cambio: 1.14,
    }
  ]
  
  const[cantidad, setCantidad]=useState(0)
  const[resultado, setResultado]=useState(0)
  
  const calculo=(e)=>{
    setCantidad(e.target.value);
    setResultado(Number(e.target.value)*cambios[1].cambio);
  }
  return (
    <div>
    <label htmlFor='u0'>{cambios[0].moneda}</label>
    <input id="u0" type="number" onChange={calculo} value={cantidad}></input>
    <label htmlFor='u1'>{cambios[1].moneda}</label>
    <input id="u1" type="number" readOnly value={resultado}></input>
    <label htmlFor='u2'>{cambios[2].moneda}</label>
    <input id="u2" type="number" readOnly></input>
    <label htmlFor='u3'>{cambios[3].moneda}</label>
    <input id="u3" type="number" readOnly></input>

    </div>
  );
}

export default App;

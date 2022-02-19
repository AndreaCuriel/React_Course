import { specialCharMap } from '@testing-library/user-event/dist/keyboard';
import React from 'react';

function Actividad1({reyes}) {

    const url="https://www.html6.es/img/rey_";
    const listaReyes=reyes.map(valor=>
    <div className='cajaRey' key={valor.nombre}> 
    <spam id="nombreRey" >{valor.nombre.toUpperCase()} </spam>
    ha comido {valor.reinado*365*valor.vacasComidas} vacas en sus {valor.reinado} anos de reinado
     <br/>
     <img src={url+valor.nombre.toLowerCase()+"png"}/>
     </div>);

  return <>

  {listaReyes}
  


 
  </>;
}

export default Actividad1;

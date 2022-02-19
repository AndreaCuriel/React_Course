import React from 'react';

function Actividad2({reyes}) {

    const eliminar =(e)=>{
        e.target.parentNode.remove();

    }

    
    

  return <>

  {reyes.filter(valor=>!valor.nombre.includes("g")).map(valor=>
    <div key={valor.nombre}>{valor.nombre}
    <button onClick={eliminar}> Eliminar </button></div>)}
  </>;
}

export default Actividad2;

  

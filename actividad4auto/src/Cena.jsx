import React from 'react';

function Cena({reyes, setTotal}) {
    const [{nombre, color, precio}]= reyes;
    
  return ( <>
  
      {reyes.map((number)=> 
      {<li>esta es la lista{nombre}</li>})}      
  
  </> )
}

export default Cena;

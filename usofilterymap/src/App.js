import React from 'react';

function App() {

  const reyes=[{
    nombre:"Atanagildo",
    vacasComidas: 2,
  },{
    nombre:"Ervigio",
    vacasComidas: 11,
  },{
    nombre:"Ataúlfo",
    vacasComidas: 6,
  },{
    nombre:"Leogivildo",
    vacasComidas:14,
  },{
    nombre: "Recesvinto",
    vacasComidas:3,
  }]

  
  //filter
  const resultado1=reyes.filter(valor=>valor.vacasComidas>=10);  // se usa la misma sintaxi para "find" solo que este solo te entregara el primer resultado encontrado, lo cual no se necesita un map, ya que no entregara un array
  //map, recorre el array el numero de veces de su magnitud. lo cual el map correra 5 veces, asignando 7 divs 
 
  //map
  const resultado2=resultado1.map(valor=><div key={valor.nombre}> {valor.nombre} come {valor.vacasComidas} vacas al día </div>
      );
  //find
  const resultado3=reyes.find(valor=>valor.vacasComidas>=10); //el find encuentra el primer valor y lo guarda
  
  //include'

  const resultado4=reyes.find(valor=>valor.nombre.includes("a"));  //busca especifico donde el nombre conrenga una a minuscula. no recorre. Dara solo el primer resultado obtenido por el find 


  return <>
  <div className='caja'>{resultado2}</div>
  <br/>
  <div>{resultado3.nombre} come {resultado3.vacasComidas} vacas al día</div>
  <br/>
  <div>{resultado4.nombre} come {resultado4.vacasComidas} vacas al día</div>
  </>
}

export default App;


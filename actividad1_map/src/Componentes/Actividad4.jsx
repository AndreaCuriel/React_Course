import React from 'react'
//encontar los reyes que comen mas de 10 y tiene mas de 10 de reinado
function Actividad4({reyes}) {
    
    const aumento =(e)=>{
        //se obtiene el cntenido de la caja div y se incrementa con el ++ al inicio, para que primero cambie el valor y luego lo imprima, de lo contaro se atrasaria 

        ++e.target.innerHTML

    }


  return (
    <>
    {reyes.filter(valor=>valor.vacasComidas>10 && valor.reinado>10).map(valor=> <div key={valor.nombre}>{valor.nombre} <div className='numero' onClick={aumento}>0</div></div>)}
    </>
  )
}

export default Actividad4
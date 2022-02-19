import React from 'react'

function Actividad3({reyes}) {
// Encontrar el primero rey que empiece con la letra E o e
    const resultado=reyes.find(valor=>valor.nombre.substring(0,1)=="e" || valor.nombre.substring(0,1)=="E")




  return (
    <>
    {resultado==undefined ? "No se ha encontrado"
    : resultado.nombre}
    </>
  )
}

export default Actividad3
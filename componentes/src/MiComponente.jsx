import React from 'react';

function MiComponente({rey, reses}) { //se apregan las propiedades del componente que se le otorgaron en el padre App.js, con el mismo nombre 
  return <div>
      <h1>Hola {rey} come {reses} vacas al día</h1>
  </div>;
}

//propiedades por defecto para la funcion Micomponente. estos valores se consideraran si el padre no le manda un valor
MiComponente.defaultProps={
    reses: "pocas", 
    rey: "Rey Godo"
};
export default MiComponente;

import React from 'react';

function Cena({nombre, color, precio, setTotal}) {
    //ruta de las imagenes
    const ruta="http://www.html6.es/img/rey_";
    const imagen=`${ruta}${nombre.toLowerCase()}.png`;  //usando comillas invertidas competamos la url de las imagenes 
   
    //funcion del click del boton de compra 
    const comprar=(elemento)=>{
        setTotal((valoractual)=> valoractual+precio); //valoractual puede llamarse como quieras, repesenta el valor que tiene en ese momento la contante total del padre
        elemento.target.parentNode.parentNode.parentNode.style.display="none"; //llama el target del padre div rey para desaparecerlo y que los demas elementos ocupen su lugar con none. 

    };
  return <>
  <div className="rey"  style={{background:color}}>
      <h1>{nombre}</h1> 
      <img src={imagen}/>
      <div className="titulo">Precio:</div>
      <div className="precio">{precio} Euros
            <div>
                <button onClick={comprar}>Comprar</button>  
            </div>
        </div>
  </div>
  </>;
}

export default Cena;

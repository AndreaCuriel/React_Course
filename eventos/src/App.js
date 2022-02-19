import imagen0 from './imagenes/rey_atanagildo.png'
import imagen1 from './imagenes/rey_sisebuto.png'
import './App.css';
import {useRef} from 'react';


function App() {
  //se va crear una contancia para la referencia que se necesita para la funcion convertir 
  const refCaja=useRef();  //va guardar la referencia de un evento y se tine que referenciar en div caja
  const cambio=23.16;

  //creacion de variables y funciones van aqui, donde es puro lenguaje javacript
  // funcion basica
  function incrementar(e){
   // console.log(e.target.innerHTML); //para obtener la propiedad del target en especifico lo que tiene dentro en html (el 1 escrito)
   e.target.innerHTML=Number(e.target.innerHTML)+1; // el Number combierte el valor a numerico para que pueda ser incrementado
   //e.target.style.backgroundColor="red"; //para agregar el estilo, como es css en javascript se debe quitar el guion y poner la primera letra en mayuscula para que funcione 
   if (e.target.innerHTML>=8){
     e.target.style.backgroundColor="red";
   }
   if (e.target.innerHTML>=10){
    e.target.innerHTML=1;
    e.target.style.backgroundColor="white";

  }
  
  }

  /*function convertir(){
    //usaremos la referencia para obtener el valor sumado de la funcion incrementar, el cual el valor esta en el target 
    // acceder a la referencia, siempre hay que colocar .curret
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;

  }*/

  //se usara la funcion flecha que sustituye la de arriba (convertir)

  const convertir=()=>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
  }



  const cambiar=(j)=>{  //cambia la imagen0 por la imagen1
   if(j.target.src.includes("atanagildo")){  //el target siempre en imagenes les agrega despues del nombre numeros, a si que siempre cambaira el nombre, por el cual se usa el include en vez del imagen
     j.target.src=imagen1;
   }else {
     j.target.src=imagen0;
   }
  }

  const lectura=(y)=>{
    refCaja.current.innerHTML=y.target.value; //se llama a la referencia para que escriba en caja y se iguala al value donde se encuentra lo que se escribe en el input

  }

  return (  
    <>  {/* siempre debe abrir con una etiqueta, sea div o solo <></> o fragmente (se debe importar) */}
      <div ref={refCaja} className='caja' onClick={incrementar}>1</div> {/* se llama onClick para llmar una funcion que va hacr incrementar el 1 */}
      <button onClick={convertir}>Aceptar</button>
      <div><img onClick={cambiar} src={imagen0} /></div>
      <input onChange={lectura} className='campo'/>  {/*evento onChange para realizar una accion cuando se escribe en el input*/}
    </>
     
  );
}

export default App;

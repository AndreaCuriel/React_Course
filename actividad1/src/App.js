import imagen0 from './imagenes/rey_atanagildo.png';
import imagen1 from './imagenes/rey_leogivildo.png';
import imagen2 from './imagenes/rey_sisebuto.png';
import imagen3 from './imagenes/rey_incognito.png';
import './miCss.css';
import {useRef} from 'react';

function App() {
  /*aqui se deben crear los arrays */
  let nombres=["Atanagildo","Leogivildo", "Sisebuto"];
  


  const fondos=(e)=>{
    if(e.target.src.includes("incognito")){
      e.target.style.visibility="hidden";
    } else { 
      e.target.parentNode.style.backgroundColor="white"; //parentNode de js te lleva al padre de la imagen, en este caso caja.
      e.target.parentNode.style.border="0px"
      e.target.src=imagen3
      
    }
  }

  const vistos=(j)=>{
    if(j.target.innerHTML=="Visto"){
      j.target.innerHTML="";
    } else {
      j.target.innerHTML="Visto";
    }
    
  }

  return (
    <div className="contenedor">
      <div className="caja">
        <img onClick={fondos}  src={imagen0}/>
        <div onClick={vistos} className='nombre'>{nombres[0]}</div>
      </div>
      <div className="caja">
        <img onClick={fondos} src={imagen1}/>
        <div onClick={vistos} className='nombre'>{nombres[1]}</div>
      </div>
      <div className="caja">
        <img onClick={fondos} src={imagen2}/>
        <div onClick={vistos} className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import "./App.css"

const App = () => {
  const [contar, setContar] = useState(0); //react no usa variables, usa contantes con el hook useState, donde se almacena la contante con un metofo get igualado al hook
  //para la suma
  const [cifra1, setCifra1] = useState();
  const [cifra2, setCifra2] = useState();
  const [resultado, setResultado] = useState();

 /* const cambiar =()=>{      // esta funcion se puede agregar directo en el vofigo html donde esta em onClick={()=>...}
    setNombre("Veronica");
    console.log(nombre);
  }*/

  /*const disminuir =()=>{  //se consulta el valor de contar, no se modifica su valor 
    setContar(contar-1);

  }
  const aumentar =()=>{
    setContar(contar+1);

  }*/
  const restablecer =()=>{
    setContar(0);

  }
  //funciones para la suma 
  const sumar =()=>{
    setResultado(Number(cifra1)+Number(cifra2));

  }

  const modificar1 =(e)=>{
    setCifra1(e.target.value);
  }

  const modificar2 =(e)=>{
    setCifra2(e.target.value);
  }






  return(
     <div>
       {/*aumentar y disminuir*/}
       <div>
        <button onClick={()=>setContar(contar-1)}>Dismunuir</button>  {/* se agrego la funcion */}
        <button onClick={()=>setContar(contar+1)}>Aumentar</button>  
        <button onClick={restablecer}>restablecer</button>  
        <h1>{contar}</h1>
      </div>
      {/*suma*/}
      <div className='suma'>
        <input type="number" value={cifra1} onChange={modificar1}/> +
        <input type="number" value={cifra2} onChange={modificar2} /> =
        <input type="number" value={resultado} readOnly/>
        <button onClick={sumar} >Sumar</button>
      </div>


    </div>
  )
}

export default App;


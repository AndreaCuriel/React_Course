import { SameValueNonNumber } from 'es-abstract/es2016';
import './App.css'; //como importar un archivo .css
import imagen from "./logo192.png";  //como importar una imagen

function App() {
  let nombre={name: "Jab", edad:18} //se crea un objeto llamado nombre
  let caja=<div>Nombre</div>
  return (
    <div className="fondo"> {/*esto es un comentario cuando usas lineas de html dentro del jsx*/}
      <h1>{nombre.name}</h1>
      <img src={imagen} className="im"/>
      <input value={nombre.edad}/>
      <div>{caja}</div>
      <br/>
    </div>
  );
}

export default App;

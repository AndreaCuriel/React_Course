import React, { useContext } from "react"; //importar useContext
import { Contexto } from "./contexto/Contexto";

function Colores() {
  const { setColor } = useContext(Contexto); //agregar que contexto se va usar, igualado al setColor que llamaremos de Contexto.js
  return (
    <div className="colores">
      <div
        className="color"
        onClick={() => {
          setColor("#172AE8");
        }}
      ></div>
      <div
        className="color"
        onClick={() => {
          setColor("#E85317");
        }}
      ></div>
      <div
        className="color"
        onClick={() => {
          setColor("#FBF154");
        }}
      ></div>
      <div
        className="color"
        onClick={() => {
          setColor("#3CB50F");
        }}
      ></div>
    </div>
  );
}

export default Colores;

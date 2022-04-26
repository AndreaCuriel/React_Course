import React, { useContext } from "react";
import { Contexto } from "./contexto/Contexto";

function Pagina3() {
  //usar el context
  const { color } = useContext(Contexto); //se iguala la varable que se creo en Contexto.js al hook useContext
  return (
    <div className="hijo" style={{ background: color }}>
      Pagina3
    </div>
  );
}

export default Pagina3;

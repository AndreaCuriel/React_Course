import React, { createContext, useState } from "react";

export const Contexto = createContext();

//acceder a los datos que tendra el contexto, y afectara a todos sus hijos, que es pagina1, pagina2, pagina3, colores
export const Datos = ({ children }) => {
  const [color, setColor] = useState("blue");
  return (
    <Contexto.Provider value={{ color, setColor }}>
      {children}
    </Contexto.Provider>
  );
};

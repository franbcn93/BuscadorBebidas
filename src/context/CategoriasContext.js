import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//  Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentra las funciones y state
const CategoriasProvider = (props) => {
  //  Crear el state del Context
  const [categorias, guardarCategorias] = useState([]);

  //   // Ejecutamos el llamado a la API
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categorias = await axios.get(url);
      // console.log(categorias.data.drinks);
      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;

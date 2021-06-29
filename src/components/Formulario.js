import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  // Función para leer los contenidos
  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      action=""
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            placeholder="Buscar por Ingrediente"
            className="form-control"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            id=""
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};
export default Formulario;

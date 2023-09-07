import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import FormCategorias from "./Form/FormCategorias";
import { Padre } from "../styles/global";

const Categorias = () => {
  const [categoriaActual, setCategoriaActual] = useState({});
  const { openModal, closeModal } = useModal(
    Object.keys(categoriaActual).length > 0 ? "Editar categoría" : "Agregar Categoría",
    <FormCategorias
      categoriaActual={categoriaActual}
      setCategoriaActual={setCategoriaActual}
      mostrarCategorias={mostrarCategorias}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  const [categorias, setCategorias] = useState([]);

  async function mostrarCategorias() {
    const response = await fetch("http://127.0.0.1:8000/api/Cat", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCategorias(respuesta);
  }

  async function eliminarCategoria(id) {
    const response = await fetch("http://127.0.0.1:8000/api/Cat/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      mostrarCategorias();
    }
  }

  function editarCategoria(id) {
    const selectedCategoria = categorias.find((r) => r.id === id);
    setCategoriaActual(selectedCategoria);
  }

  useEffect(() => {
    mostrarCategorias();
  }, []);

  return (
    <Padre>
      <div>
        <h1>CATEGORÍAS</h1>
        <p>Cantidad de registros {categorias.length}</p>
        <button onClick={openModal}>Agregar</button>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((c) => (
              <tr key={c.id}>
                <td>{c.nombre}</td>
                <td>
                  <button onClick={() => editarCategoria(c.id)}>
                    {Object.keys(categoriaActual).length > 0 ? "Actualizar" : "Editar"}
                  </button>
                  <button onClick={() => eliminarCategoria(c.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Padre>
  );
};

export default Categorias;

import React, { useState, useEffect } from "react";
import { postCategoria, updateCategoria } from "../../services/ServiceCategoria";

const FormCategorias = ({
  getApi,
  categoriaactual,
  setCategoriaactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (Object.keys(categoriaactual).length > 0) {
      setNombre(categoriaactual.nombre);
    }
  }, [categoriaactual]);

  const updatePost = (e) => {
    e.preventDefault();

    if (Object.keys(categoriaactual).length > 0) {
      updateCategoria(
        {
          id: categoriaactual.id,
          nombre: nombre,
        },
        () => {
          setNombre("");
          closeModal();
          setCategoriaactual({});
          getApi();
        }
      );
    } else {
      postCategoria(nombre, () => {
        setNombre("");
        getApi();
        closeModal();
      });
    }
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        </div>
        <button onClick={updatePost}>
          {Object.keys(categoriaactual).length > 0 ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
};

export default FormCategorias;

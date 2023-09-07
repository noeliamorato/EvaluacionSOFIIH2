import { useState } from "react";
import { useModal } from "../hooks/useModal";
import { getCategoria } from "../services/ServiceCategoria";
import { Catego } from "../styles/global";
import FormCategorias from "./Forms/Formcategorias";
import { useEffect } from "react";
import { UseFech } from "../hooks/useFech";

const Categorias = () => {
  
  const { getApi, data: categg } = UseFech(getCategoria);
  const [categoriaactual, setCategoriaactual] = useState({});

  const { openModal, closeModal } = useModal(
    Object.keys(categoriaactual).length > 0 ? "Editar Categoria" : "Agregar Categoria",
    <FormCategorias
      getApi={getApi}
      categoriaactual={categoriaactual}
      setCategoriaactual={setCategoriaactual}
  
    />
  );
  useEffect(() => {
    if (Object.keys(categoriaactual).length > 0) {
      openModal();
    }
  }, [categoriaactual]);
  return (
    <Catego>
    <h2> Categoria</h2>
    <button onClick={openModal} >agregar</button>
    <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categg.map((c) => (
              <tr key={c.id}>
                <td>{c.nombre}</td>
                <td>
                  <button >
                    {Object.keys(categoriaactual).length > 0 ? "Actualizar" : "Editar"}
                  </button>
                  <button >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </Catego>
 
  );
};

export default Categorias;

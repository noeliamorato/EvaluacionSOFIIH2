import { useState } from "react";
import { useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import FormMedicamentos from "./Forms/Formmedicamentos";
import {
  deleteMedicamentos,
  getMedicamentos,
} from "../services/ServiceMedicamento";
import { Catego } from "../styles/global";
import { useModal } from "../hooks/useModal";

const Medicamentos = () => {
  const { getApi, data: med } = UseFech(getMedicamentos);
  const [medicamentosactual, setMedicamentosactual] = useState({});
  const { openModal, closeModal } = useModal(
    Object.keys(medicamentosactual).length > 0
      ? "Editar Medicamentos"
      : "Agregar Medicamentos",
    <FormMedicamentos
      getApi={getApi}
      medicamentosactual={medicamentosactual}
      setMedicamentosactual={setMedicamentosactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  useEffect(() => {
    if (Object.keys(medicamentosactual).length > 0) {
      openModal();
    }
  }, [medicamentosactual]);
  return (
    <Catego>
      <button onClick={openModal}>agregar</button>
      <h2> Medicamentos</h2>
      <table>
        <thead>
          <tr>
            <th>codigo</th>
            <th>descripcion</th>
            <th>nombre</th>
            <th>fechaEntrada</th>
            <th>fechaVencimiento</th>
            <th>stock</th>
            <th>idCategorias</th>
            <th>Botones</th>
          </tr>
        </thead>
        <tbody>
          {med.map((c) => (
            <tr key={c.id}>
              <td>{c.codigo}</td>
              <td>{c.descripcion}</td>
              <td>{c.nombre}</td>
              <td>{c.fecha_entrada}</td>
              <td>{c.fecha_ven}</td>
              <td>{c.stock}</td>
              <td>{c.id_categorias}</td>
              <td>
                <button>
                  {Object.keys(medicamentosactual).length > 0
                    ? "Actualizar"
                    : "Editar"}
                
                </button>
                <button
                  onClick={() => {
                    deleteMedicamentos(c.id, getApi);
                  }}
                >
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

export default Medicamentos;

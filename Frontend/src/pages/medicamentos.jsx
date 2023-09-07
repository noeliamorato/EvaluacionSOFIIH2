import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import FormMedicamentos from "./Forms/Formmedicamentos";
import { Padre } from "../styles/global";

const Medicamentos = () => {
  const [medicamentoActual, setMedicamentoActual] = useState({});
  const { openModal, closeModal } = useModal(
    Object.keys(medicamentoActual).length > 0 ? "Editar medicamento" : "Agregar Medicamento",
    <FormMedicamentos
      medicamentoActual={medicamentoActual}
      setMedicamentoActual={setMedicamentoActual}
      mostrarMedicamentos={mostrarMedicamentos}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  const [medicamentos, setMedicamentos] = useState([]);

  async function mostrarMedicamentos() {
    const response = await fetch("http://127.0.0.1:8000/api/Med", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setMedicamentos(respuesta);
  }

  async function eliminarMedicamento(id) {
    const response = await fetch("http://127.0.0.1:8000/api/Med/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      mostrarMedicamentos();
    }
  }

  function editarMedicamento(id) {
    const selectedMedicamento = medicamentos.find((r) => r.id === id);
    setMedicamentoActual(selectedMedicamento);
  }

  useEffect(() => {
    mostrarMedicamentos();
  }, []);

  return (
    <Padre>
      <div>
        <h1>MEDICAMENTOS</h1>
        <p>Cantidad de registros {medicamentos.length}</p>
        <button onClick={openModal}>Agregar</button>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Nombre</th>
              <th>Fecha de Entrada</th>
              <th>Fecha de Vencimiento</th>
              <th>Stock</th>
              <th>ID de Categorías</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {medicamentos.map((m) => (
              <tr key={m.id}>
                <td>{m.codigo}</td>
                <td>{m.descripcion}</td>
                <td>{m.nombre}</td>
                <td>{m.fecha_entrada}</td>
                <td>{m.fecha_ven}</td>
                <td>{m.stock}</td>
                <td>{m.id_categorias}</td>
                <td>
                  <button onClick={() => editarMedicamento(m.id)}>
                    {Object.keys(medicamentoActual).length > 0 ? "Actualizar" : "Editar"}
                  </button>
                  <button onClick={() => eliminarMedicamento(m.id)}>
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

export default Medicamentos;


import { useState, useEffect } from "react";
import {
  postMedicamentos,
  updateMedicamentos,
} from "../../services/ServiceMedicamento";
import { getCategoria } from "../../services/ServiceCategoria";
import { UseFech } from "../../hooks/useFech";

const FormMedicamentos = ({
  getApi,
  medicamentosactual,
  setMedicamentosactual,
  closeModal,
}) => {
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha_entrada, setFecha_entrada] = useState("");
  const [fecha_ven, setFecha_ven] = useState("");
  const [stock, setStock] = useState("");
  const [id_categorias, setId_categorias] = useState("");
  const { data: cat } = UseFech(getCategoria);

  useEffect(() => {
    if (Object.keys(medicamentosactual).length > 0) {
      setCodigo(medicamentosactual.codigo);
      setDescripcion(medicamentosactual.descripcion);
      setNombre(medicamentosactual.nombre);
      setFecha_entrada(medicamentosactual.fecha_entrada);
      setFecha_ven(medicamentosactual.fecha_ven);
      setStock(medicamentosactual.stock);
    }
    return () => {
      setMedicamentosactual({});
    };
  }, [medicamentosactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(medicamentosactual).length > 0) {
      updateMedicamentos(
        {
          id: medicamentosactual.id,
          codigo: codigo,
          descripcion: descripcion,
          nombre: nombre,
          fecha_entrada: fecha_entrada,
          fecha_ven: fecha_ven,
          stock: stock,
          id_categorias: setId_categorias,
        },
        () => {
          setCodigo("");
          setDescripcion("");
          setNombre("");
          setFecha_entrada("");
          setFecha_ven("");
          setStock("");
          closeModal();
          setMedicamentosactual({});
          getApi();
        }
      );
    } else {
      postMedicamentos(
        codigo,
        descripcion,
        fecha_entrada,
        fecha_ven,
        stock,
        nombre,
        id_categorias,
        () => {
          setCodigo("");
          setDescripcion("");
          setNombre("");
          setFecha_entrada("");
          setFecha_ven("");
          setStock("");
          getApi();
          closeModal();
        }
      );
    }
  };

  return (
    <>
      <form>
        <div>
          <label>codigo:</label>
          <input
            name="codigo"
            placeholder="Ingrese un codigo"
            type="text"
            required
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>
        <div>
          <label>descripcion:</label>
          <input
            name="descripcion"
            placeholder="Ingrese un descripcion"
            type="text"
            required
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div>
          <label>nombre:</label>
          <input
            name="nombre"
            placeholder="Ingrese un nombre"
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>fecha entrada:</label>
          <input
            name="fechaentrada"
            placeholder="Ingrese un fechaentrada"
            type="date"
            required
            value={fecha_entrada}
            onChange={(e) => setFecha_entrada(e.target.value)}
          />
        </div>
        <div>
          <label>fechavencimiento:</label>
          <input
            name="fecha vencimiento"
            placeholder="Ingrese un fechavencimiento"
            type="date"
            required
            value={fecha_ven}
            onChange={(e) => setFecha_ven(e.target.value)}
          />
        </div>
        <div>
          <label>stock:</label>
          <input
            name="stock"
            placeholder="Ingrese un stock"
            type="text"
            required
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div>
          <label>categoria</label>
          <select onChange={(e) => setId_categorias(e.target.value)}>
            <option>seleccione el categoria</option>
            {cat.map((v, i) => (
              <option key={i} value={v.id}>
                {v.id}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={(e) => updatepost(e)}>
            {Object.keys(medicamentosactual).length > 0 ? "Editar" : "Agregar"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormMedicamentos;

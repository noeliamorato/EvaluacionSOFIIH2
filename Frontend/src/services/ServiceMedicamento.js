const baseUrl = import.meta.env.VITE_BACKEND_URL;
export const getMedicamentos = async () => {
  try {
    const response = await fetch(`${baseUrl}Med`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteMedicamentos = async (id, callback) => {
  const response = await fetch(`${baseUrl}Med/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (response.ok) {
    callback();
  }
};
export const updateMedicamentos = async (medicamentosactual, callback) => {
console.log(JSON.stringify({
  codigo: medicamentosactual.codigo,
  descripcion: medicamentosactual.descripcion,
  nombre: medicamentosactual.nombre,
  fecha_entrada: medicamentosactual.fecha_entrada,
  fecha_ven: medicamentosactual.fecha_ven,
  stock: medicamentosactual.stock,
  id_categorias: medicamentosactual.id_categorias,
}));

  const response = await fetch(`${baseUrl}Med/${medicamentosactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      codigo: medicamentosactual.codigo,
      descripcion: medicamentosactual.descripcion,
      nombre: medicamentosactual.nombre,
      fecha_entrada: medicamentosactual.fecha_entrada,
      fecha_ven: medicamentosactual.fecha_ven,
      stock: medicamentosactual.stock,
      id_categorias: medicamentosactual.id_categorias,
    }),
  });
  if (response.ok) {
    callback();
  }
};
export const postMedicamentos = async (
  codigo,
  descripcion,
  fecha_entrada,
  fecha_ven,
  stock,
  nombre,
  id_categorias,
  callback
) => {

  const response = await fetch(`${baseUrl}Med`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      codigo: codigo,
      descripcion: descripcion,
      nombre: nombre,
      fecha_entrada: fecha_entrada,
      fecha_ven: fecha_ven,
      stock: stock,
      id_categorias: id_categorias,
    }),
  });
  if (response.ok) {
    callback();
  }
};

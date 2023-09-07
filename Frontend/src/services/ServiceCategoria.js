const baseUrl = import.meta.env.VITE_BACKEND_URL;
export const getCategoria = async () => {
  try {
    const response = await fetch(`${baseUrl}Cat`, {
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
export const deleteCategoria = async (id, callback) => {
  const response = await fetch(`${baseUrl}Cat/${id}`, {
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
export const updateCategoria = async (categoriaactual, callback) => {
  const response = await fetch(`${baseUrl}Cat/${categoriaactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: categoriaactual.nombre,
    }),
  });
  if (response.ok) {
    callback();
  }
};
export const postCategoria = async (nombre, callback) => {
  const response = await fetch(`${baseUrl}Cat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
    }),
  });
  if (response.ok) {
    callback();
  }
};

import { useState, useEffect } from "react";

export const UseFech = (ruta) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getApi = async () => {
    const response = await ruta();
    const respuesta = await response?.json();
    setData(respuesta);
    setLoading(false);
  };
  useEffect(() => {
    getApi();
  }, []);
  return {
    loading,
    getApi,
    data,
  };
};

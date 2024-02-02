import axiosConfig from "./axios";

export const obtenerClientesAPi = async () => {
  const data = await axiosConfig.get("/clientes");
  return data;
};

export const crearClienteApi = async (values) => {
  const data = await axiosConfig.post("/crear", values);
  return data;
};

export const borrarClienteAPi = async (identificacion) => {
  const data = await axiosConfig.delete(`/borrar/${identificacion}`);
  return data;
};

export const editarClienteApi = async (identificacion, values) => {
  const data = await axiosConfig.put(`/editar/${identificacion}`, values);
  return data;
};

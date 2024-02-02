/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import {
  obtenerClientesAPi,
  crearClienteApi,
  borrarClienteAPi,
  editarClienteApi,
} from "../api/Clientes.request";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);
  const [errores, setErrores] = useState("");
  const obtenerClientes = async () => {
    try {
      const { data } = await obtenerClientesAPi();
      setClientes(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const crearCliente = async (data) => {
    try {
      const response = await crearClienteApi(data);
      console.log(response);
      return response;
    } catch (error) {
      setErrores(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const borrarCliente = async (identificacion) => {
    try {
      const data = await borrarClienteAPi(identificacion);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editarCliente = async (identificacion, values) => {
    try {
      const data = await editarClienteApi(identificacion, values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (errores.length > 0) {
      const timer = setTimeout(() => {
        setErrores("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errores]);

  return (
    <ClientContext.Provider
      value={{
        obtenerClientes,
        crearCliente,
        borrarCliente,
        editarCliente,
        clientes,
        errores,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

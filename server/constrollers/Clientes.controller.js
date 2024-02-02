import Clientes from "../models/Clientes.model.js";

export const crearCliente = async (req, res) => {
  await Clientes.crearCliente(req, res);
};

export const borrarCliente = async (req, res) => {
  await Clientes.borrarCliente(req, res);
};

export const editarCliente = async (req, res) => {
  await Clientes.editarCliente(req, res);
};

export const obtenerClientes = async (req, res) => {
  await Clientes.obtenerClientes(req, res);
};

export const obtenerCliente = async (req, res) => {
  await Clientes.obtenerCliente(req, res);
};

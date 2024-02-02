import { Router } from "express";
import {
  crearCliente,
  borrarCliente,
  editarCliente,
  obtenerCliente,
  obtenerClientes,
} from "../constrollers/Clientes.controller.js";
import {
  validarTelefono,
  validarNombres,
  validarCorreo,
  validarFechas,
  validarEdad,
  validarId
} from "../validaciones/validaciones.js";
const clienteRouter = Router();

clienteRouter.post(
  "/crear",
  validarId,
  validarEdad,
  validarTelefono,
  validarNombres,
  validarCorreo,
  validarFechas,
  crearCliente
); // crear un cliente

clienteRouter.delete("/borrar/:identificacion", borrarCliente); // borrar un cliente

clienteRouter.put("/editar/:identificacion", editarCliente); // editar cliente

clienteRouter.get("/cliente", obtenerCliente); // obteener un cliente

clienteRouter.get("/clientes", obtenerClientes); // listar clientes

export default clienteRouter;

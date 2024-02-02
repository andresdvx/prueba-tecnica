import conn from "../batabase/db.connection.js";
import { response, request } from "express";
import uploadPicture from "../middlewares/upload.js";
class Clientes {
  constructor() {}

  static async crearCliente(req = request, res = response) {
    const {
      identificacion,
      tipo_identificacion,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      direccion,
      telefono,
      email,
      ocupacion,
      fecha_nacimiento,
    } = req.body;
    const queryBuscar =
      "select identificacion from Clientes where identificacion = ?";
    const [clienteEncontrado] = await conn.query(queryBuscar, [identificacion]); // verificar si ya existe un cliente con la identificación ingresada

    if (clienteEncontrado.length > 0) {
      return res.status(400).json({
        message: `el usuario con identificaion ${identificacion} ya existe`,
      });
    }
    const { foto } = req.files;
    const { tempFilePath } = foto;
    const { secure_url, public_id } = await uploadPicture(tempFilePath); // subir imagenes a cloudinary
    try {
      const queryCrear =
        "insert into Clientes values (?,?,?,?,?,?,?,?,?,?,?,?);";
      const [clienteCreado] = await conn.query(queryCrear, [ // ingresar los datos en la base de datos
        identificacion,
        tipo_identificacion,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        direccion,
        telefono,
        email,
        ocupacion,
        fecha_nacimiento,
        secure_url,
      ]);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: `error, no se ha podido crear ${error}` });
    }
    res.status(201).json({ message: "se ha creado con exito!" });
  }

  static async borrarCliente(req = request, res = response) {
    const { identificacion } = req.params;
    try {
      const queryBorrar = "delete from Clientes where identificacion = ?";
      const [clienteBorrado] = await conn.query(queryBorrar, [identificacion]); // borrar los un cliente mediante su identificación
      if (clienteBorrado.affectedRows > 0)
        return res
          .status(200)
          .json({ message: `cliente ${identificacion} borrado con exito` });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `error, no se ha podido borrar el cliente ${error}` });
    }
  }
  static async editarCliente(req = request, res = response) {
    const { identificacion } = req.params;
    const {
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      direccion,
      telefono,
      email,
      ocupacion,
      fecha_nacimiento,
      tipo_identificacion,
    } = req.body;
    const { foto } = req.files;
    const { tempFilePath } = foto;
    const { secure_url, public_id } = await uploadPicture(tempFilePath); // subir imagen
    try {
      const queryEditar =
        "update Clientes set tipo_identificacion = ?, primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, direccion = ?, telefono = ?, email = ?, ocupacion = ?, fecha_nacimiento = ?, foto = ? where identificacion = ? ";
      const [clienteEditado] = await conn.query(queryEditar, [ // ingresar los datos en la base de datos
        tipo_identificacion,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        direccion,
        telefono,
        email,
        ocupacion,
        fecha_nacimiento,
        secure_url,
        identificacion,
      ]);
      if (clienteEditado.affectedRows > 0)
        return res.status(200).json({ message: "se ha editado con exito" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `error, no se ha podido editar el cliente ${error}` });
    }
  }

  static async obtenerClientes(req = request, res = response) {
    try {
      const query = "select * from Clientes";
      const [clientes] = await conn.query(query); // listar los clientes
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({
        message: `error, no se ha podido obetener los clientes ${error}`,
      });
    }
  }

  static async obtenerCliente(req = request, res = response) {
    const { busqueda } = req.body;
    try {
      const query =
        "select * from Clientes where identificacion like ? or primer_nombre like ?"; // funcion no buscar cliente no implementada en el frontedn
      const busquedaCast = `%${busqueda}%`;
      const [cliente] = await conn.query(query, [busquedaCast, busquedaCast]);
      if (cliente.length > 0) return res.json(cliente);
    } catch (error) {
      console.log(error);
    }
  }
}
export default Clientes;

/* eslint-disable no-unused-vars */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { useEffect, useContext } from "react";
import { ClientContext } from "../context/ClienteContext";
import { Link } from "react-router-dom";
const ClientCard = () => {
  const { obtenerClientes, clientes, borrarCliente } =
    useContext(ClientContext);
  useEffect(() => {
    obtenerClientes();
  });
  if (clientes.length > 0) {
    return clientes.map((cliente, i) => {
      return (
        <Card className="max-w-[75%] mx-auto mt-5 bg-slate-700" key={i}>
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src={cliente && cliente.foto}
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className=" text-white">
                  {cliente &&
                    cliente.primer_nombre +
                      " " +
                      cliente.segundo_nombre +
                      " " +
                      cliente.primer_apellido +
                      " " +
                      cliente.segundo_apellido}
                </h4>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <div className=" ">
              <p>identificación: {cliente && cliente.identificacion}</p>
              <p>
                tipo: identificación: {cliente && cliente.tipo_identificacion}
              </p>
              <p>correo: {cliente && cliente.email}</p>
              <p>telefono: {cliente && cliente.telefono}</p>
              <p>ocupacion: {cliente && cliente.ocupacion}</p>
            </div>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-3">
              <p className="text-white">fecha: {cliente && new Date(cliente.fecha_nacimiento).toLocaleDateString()}</p>
              <p className="text-white">direccion: {cliente && cliente.direccion}</p>
              <button
                className="py-2 px-5 bg-red-500 rounded-md"
                onClick={() => {
                  borrarCliente(cliente.identificacion);
                }}
              >
                Borrar
              </button>
              <Link className="py-2 px-5 bg-blue-500 rounded-md" to={`/editar/${cliente.identificacion}`}>Editar</Link>
            </div>
          </CardFooter>
        </Card>
      );
    });
  }
};
export default ClientCard;

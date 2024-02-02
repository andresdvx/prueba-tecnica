/* eslint-disable no-unused-vars */
import { Input, Select, SelectItem } from "@nextui-org/react";
import Nav from "../components/Nav";
import { useContext, useState } from "react";
import { ClientContext } from "../context/ClienteContext";
import { useParams, useNavigate } from "react-router-dom";
const Crear = () => {
  const options = ["RC", "TI", "CC"];
  const params = useParams();
  const navigate = useNavigate()
  const { editarCliente, clientes } = useContext(ClientContext);
  const [cliente, setCliente] = useState({
    tipo_identificacion: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    direccion: "",
    telefono: "",
    email: "",
    ocupacion: "",
    fecha_nacimiento: null,
  });
  const [foto, setFoto] = useState([]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handlePictureChange = (evt) => {
    const files = evt.target.files;
    if (files && files.length > 0) {
      const selectedImagesArray = Array.from(files);
      setFoto(selectedImagesArray);
    }
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("tipo_identificacion", cliente.tipo_identificacion);
    formData.append("primer_nombre", cliente.primer_nombre);
    formData.append("segundo_nombre", cliente.segundo_nombre);
    formData.append("primer_apellido", cliente.primer_apellido);
    formData.append("segundo_apellido", cliente.segundo_apellido);
    formData.append("direccion", cliente.direccion);
    formData.append("telefono", cliente.telefono);
    formData.append("email", cliente.email);
    formData.append("ocupacion", cliente.ocupacion);
    formData.append("fecha_nacimiento", cliente.fecha_nacimiento);
    for (let i = 0; i < foto.length; i++) {
      formData.append("foto", foto[i]);
    }
    if (params.identificacion) {
      await editarCliente(params.identificacion, formData);
      navigate('/clientes');
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-700 overflow-x-hidden">
      <Nav />
      <main className="max-w-[75%] mx-auto">
        <form className="w-[50%] mx-auto mt-10" onSubmit={onSubmit}>
          {/* <Input
            type="number"
            label="identificacion"
            className="mb-2"
            name="identificacion"
            onChange={handleInputChange} */}
          {/* /> */}
          <Select
            label="tipo de identificacion"
            className="mb-2"
            name="tipo_identificacion"
            onChange={handleInputChange}
          >
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="text"
            label="primer nombre"
            className="mb-2"
            name="primer_nombre"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="segundo nombre"
            className="mb-2"
            name="segundo_nombre"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="primer apellido"
            className="mb-2"
            name="primer_apellido"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="segundo apellido"
            className="mb-2"
            name="segundo_apellido"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="direccion"
            className="mb-2"
            name="direccion"
            onChange={handleInputChange}
          />
          <Input
            type="number"
            label="telefono"
            className="mb-2"
            name="telefono"
            onChange={handleInputChange}
          />
          <Input
            type="email"
            label="correo"
            className="mb-2"
            name="email"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="ocupación"
            className="mb-2"
            name="ocupacion"
            onChange={handleInputChange}
          />
          <Input
            type="date"
            label="fecha"
            className="mb-2"
            name="fecha_nacimiento"
            onChange={handleInputChange}
          />
          <input
            type="file"
            id="imageInput"
            name="foto"
            accept="image/*"
            onChange={handlePictureChange}
            required
          />
          <button type="submit" className="py-2 px-5 bg-slate-900 rounded-md text-white float-right">
            {" "}
            Editar
          </button>
        </form>
      </main>
    </div>
  );
};
export default Crear;

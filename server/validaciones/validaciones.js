import { request, response } from "express";

export const validarTelefono = (req, res, next) => {
  const telefonoRegex = /^\d+$/;
  const { telefono } = req.body;
  if (!telefonoRegex.test(telefono)) {
    return res.status(400).json({
      message: "El teléfono solo debe contener números",
    });
  }
  next();
};

export const validarNombres = (req = request, res = response, next) => {
  const nRex = /^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ\s]+$/;
  const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido } =
    req.body;
  if (
    !nRex.test(primer_nombre) ||
    (segundo_nombre && !nRex.test(segundo_nombre)) ||
    !nRex.test(primer_apellido) ||
    (segundo_apellido && !nRex.test(segundo_apellido))
  ) {
    return res.status(400).json({
      message:
        "Los campos de nombres y apellidos no deben solo deben contener letras (el primer nombre y el primer apellido es obligatorio).",
    });
  }
  next();
};

export const validarCorreo = (req, res, next) => {
  const cRex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { email } = req.body;
  if (!cRex.test(email)) {
    return res.status(400).json({
      message: "Ingresa una dirección de correo valida!",
    });
  }
  next();
};

export const validarFechas = (req, res, next) => {
  const { fecha_nacimiento } = req.body;
  if (Date.parse(fecha_nacimiento) > Date.parse(new Date(Date.now()))) {
    return res.status(400).json({ message: "ingrese una fecha valida!" });
  }
  next();
};

export const validarEdad = (req = request, res, next) => {
  const { tipo_identificacion, fecha_nacimiento } = req.body;
  let anio =
    fecha_nacimiento[0] +
    fecha_nacimiento[1] +
    fecha_nacimiento[2] +
    fecha_nacimiento[3];
  let edad = 2024 - anio;
  if (tipo_identificacion == "CC" && edad >= 18) {
    next();
    return;
  } else if (tipo_identificacion == "TI" && (edad >= 7 || edad < 18)) {
    next();
    return;
  } else if (tipo_identificacion == "RC" && edad < 7) {
    next();
    return;
  } else {
    return res
      .status(400)
      .json({
        message: "la edad no coindide con el el tipo de identificación",
      });
  }
};


export const validarId = (req = request, res, next)=>{
const {identificacion} = req.body;
if(identificacion.lenght > 10){
  return res
  .status(400)
  .json({
    message: "ingresa una identificación valida ( máximo 10 carácteres )",
  });
}
next();
};

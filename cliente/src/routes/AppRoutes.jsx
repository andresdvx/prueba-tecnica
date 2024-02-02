/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Clientes from "../pages/Clientes";
import Crear from "../pages/Crear";
import Editar from '../pages/Editar'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/clientes" element={<Clientes></Clientes>}></Route>
      <Route path="/crear" element={<Crear></Crear>}></Route>
      <Route path="/editar/:identificacion" element={<Editar></Editar>}></Route>
    </Routes>
  );
};

export default AppRoutes;

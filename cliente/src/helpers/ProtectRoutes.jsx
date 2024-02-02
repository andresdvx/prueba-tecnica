import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = () => {
  const { authenticated, userData } = useContext(AuthContext);
  if (!authenticated && userData == null) return <Navigate to={"sign-in"} replace />;
  return <Outlet />;
};

export default ProtectRoutes;

/* eslint-disable no-unused-vars */
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./app.css";
import { ClientProvider } from "./context/ClienteContext";

const App = () => {
  return (
    <NextUIProvider>
      <ClientProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ClientProvider>
    </NextUIProvider>
  );
};

export default App;

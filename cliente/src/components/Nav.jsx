import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import {Link} from 'react-router-dom' 
export default function App() {
  return (
    <Navbar className="bg-slate-900 text-white">
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to={'/crear'}>
            Nuevo
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to={'/clientes'}>
            Clientes
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

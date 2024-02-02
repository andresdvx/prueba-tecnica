import Nav from "../components/Nav";
import ClientCard from "../components/ClientCard";
const Clientes = () => {
  return (
    <div className="w-screen h-screen bg-slate-800 overflow-x-hidden">
      <Nav />
      <main className="max-w-[75%]  mx-auto">
        <div className="">
          <ClientCard />
        </div>
      </main>
    </div>
  );
};
export default Clientes;

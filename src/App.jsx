import "./App.css";
import Componente3 from "./components/Componente3.jsx";
import Componente5 from "./components/Componente5.jsx";
import Componente6 from "./components/Componente6.jsx";
import Componente9 from "./components/Componente9.jsx";
import ComponenteOcho from "./components/ComponenteOcho/ComponenteOcho.jsx";
import DropdownPerfil from "./components/DropdownPerfil/DropdownPerfil.jsx";
import InformacionPerfil from "./components/perfilCliente/InformacionPerfil.jsx";

function App() {

  return (
    <>
      <Componente3 />
      <Componente5 />
      <Componente6 />
      <Componente9 />
      <InformacionPerfil />
      <ComponenteOcho/>
      <DropdownPerfil/>
    </>
  );
}

export default App;

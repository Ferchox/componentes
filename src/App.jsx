import "./App.css";
import RecordatoriosActividad from "./components/notificaciones/RecordatoriosActividad.jsx";
import DescripcionEjercicio from "./components/rutinaDia/DescripcionEjercicio.jsx";
import FormularioMeta from "./components/crearMetas/FormularioMeta.jsx";
import MetasPendientes from "./components/metas/MetasPendientes.jsx";
import InformacionPerfil from "./components/perfilCliente/InformacionPerfil.jsx";
import InformacionPrincipal from "./components/inicio/InformacionPrincipal.jsx";
import DropdownPerfil from "./components/general/DropdownPerfil.jsx";
import GraficoEvaluacionUsuario from "./components/evaluacionUsuario/GraficoEvaluacionUsuario.jsx";
import MenuOpciones from "./components/general/MenuOpciones.jsx";


function App() {

  return (
    <>
      <RecordatoriosActividad />
      <DescripcionEjercicio />
      <FormularioMeta />
      <MetasPendientes />
      <GraficoEvaluacionUsuario />
      <InformacionPerfil />
      <InformacionPrincipal />
      <MenuOpciones />
      <DropdownPerfil />
    </>
  );
}

export default App;

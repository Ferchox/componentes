import "./App.css";
import RecordatoriosActividad from "./components/notificaciones/RecordatoriosActividad.jsx";
import DescripcionEjercicio from "./components/generarRutina/DescripcionEjercicio.jsx";
import FormularioMeta from "./components/crearMetas/FormularioMeta.jsx";
import MetasPendientes from "./components/metas/MetasPendientes.jsx";
import InformacionPerfil from "./components/perfilCliente/InformacionPerfil.jsx";
import InformacionPrincipal from "./components/inicio/InformacionPrincipal.jsx";
import DropdownPerfil from "./components/general/DropdownPerfil.jsx";
import SeleccionParteCuerpo from "./components/generarRutina/SeleccionParteCuerpo.jsx";
import GraficoEvaluacionUsuario from "./components/evaluacionUsuario/GraficoEvaluacionUsuario.jsx";
import DescripcionEjerciciosDesplegable from "./components/generarRutina/DescripcionEjerciciosDesplegable.jsx";
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
      <SeleccionParteCuerpo />
      <MenuOpciones />
      <DropdownPerfil />
      <DescripcionEjerciciosDesplegable/>
    </>
  );
}

export default App;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampoTexto from "./CampoTexto";
import Aviso from "../general/moleculas/Aviso";
import "./RegistroEvaluacionUsuario.css";
import axios from "axios";
import EtiquetaTitulo from "../general/moleculas/EtiquetaTitulo";

const RegistroEvaluacionUsuario = () => {
  const [pecho, setPecho] = useState("");
  const [grasaPorcentaje, setGrasaPorcentaje] = useState("");
  const [abdomen, setAbdomen] = useState("");
  const [pierna, setPierna] = useState("");
  const [pesoKg, setPesoKg] = useState("");
  const [grasaVisceral, setGrasaVisceral] = useState("");
  const [imc, setImc] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [tipoAviso, setTipoAviso] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !pecho ||
      !grasaPorcentaje ||
      !abdomen ||
      !pierna ||
      !pesoKg ||
      !grasaVisceral ||
      !imc
    ) {
      setMensaje("Todos los campos son obligatorios.");
      setTipoAviso("error");
      return;
    }

    try {
      const nuevaEvaluacion = {
        pecho,
        grasaPorcentaje,
        abdomen,
        pierna,
        pesoKg,
        grasaVisceral,
        imc,
      };
      await axios.post(
        "https://6668e270f53957909ff9675e.mockapi.io/evaluacion",
        nuevaEvaluacion
      );

      setMensaje("Evaluación registrada exitosamente.");
      setTipoAviso("exito");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error registrando evaluación:", error);
      setMensaje("Hubo un error al registrar la evaluación.");
      setTipoAviso("error");
    }
  };

  return (
    <div className="contenedor-registrar-evaluacion">
      <EtiquetaTitulo titulo="Registrar Evaluación" />
      <form className="registro-evaluacion" onSubmit={handleSubmit}>
        <CampoTexto
          tipo="number"
          placeholder="Pecho (cm)"
          valor={pecho}
          onChange={(e) => setPecho(e.target.value)}
        />
        <CampoTexto
          tipo="number"
          placeholder="Grasa Porcentaje (%)"
          valor={grasaPorcentaje}
          onChange={(e) => setGrasaPorcentaje(e.target.value)}
        />
        <CampoTexto
          tipo="number"
          placeholder="Abdomen (cm)"
          valor={abdomen}
          onChange={(e) => setAbdomen(e.target.value)}
        />
        <CampoTexto
          tipo="number"
          placeholder="Pierna (cm)"
          valor={pierna}
          onChange={(e) => setPierna(e.target.value)}
        />
        <CampoTexto
          tipo="number"
          placeholder="Peso (kg)"
          valor={pesoKg}
          onChange={(e) => setPesoKg(e.target.value)}
        />
        <CampoTexto
          tipo="number"
          placeholder="Grasa Visceral (%)"
          valor={grasaVisceral}
          onChange={(e) => setGrasaVisceral(e.target.value)}
        />
        <CampoTexto
          tipo="number"
          placeholder="IMC (kg/m²)"
          valor={imc}
          onChange={(e) => setImc(e.target.value)}
        />
        <button type="submit">Registrar Evaluación</button>
        <Aviso mensaje={mensaje} tipo={tipoAviso} />
      </form>
    </div>
  );
};

export default RegistroEvaluacionUsuario;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./RegistroEvaluacionUsuario.css";
import Aviso from "../general/Aviso";

const RegistroEvaluacionUsuario = () => {
  const [pecho1, setPecho1] = useState('');
  const [grasa1, setGrasa1] = useState('');
  const [abdomen1, setAbdomen1] = useState('');
  const [pierna1, setPierna1] = useState('');
  const [peso1, setPeso1] = useState('');
  const [altura, setAltura] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [grasaVisceral1, setGrasaVisceral1] = useState('');
  const [imc1, setImc1] = useState('');
  const [datosUsuario, setDatosUsuario] = useState(null);
  const [tipoAviso, setTipoAviso] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const usuarioId = sessionStorage.getItem('usuarioId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6668e270f53957909ff9675e.mockapi.io/evolucion');
        const data = response.data;
        const userData = data.find(item => item.idCliente === parseInt(usuarioId));
        if (userData) {
          setDatosUsuario(userData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [usuarioId]);

  const resetForm = () => {
    setPecho1('');
    setGrasa1('');
    setAbdomen1('');
    setPierna1('');
    setPeso1('');
    setAltura('');
    setObjetivo('');
    setGrasaVisceral1('');
    setImc1('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pecho1 || !grasa1 || !abdomen1 || !pierna1 || !peso1 || !altura || !objetivo || !grasaVisceral1 || !imc1) {
      setMensaje('Por favor, complete todos los campos.');
      setTipoAviso('error');
      return;
    }

    const nuevaFecha = Math.floor(Date.now() / 1000);
    const nuevaEvaluacion = {
      fecha: nuevaFecha,
      pecho: parseFloat(pecho1),
      grasaPorcentaje: parseFloat(grasa1),
      abdomen: parseFloat(abdomen1),
      pierna: parseFloat(pierna1),
      pesoKg: parseFloat(peso1),
      alturaM: parseFloat(altura),
      objetivo: objetivo,
      grasaVisceral: parseFloat(grasaVisceral1),
      imc: parseFloat(imc1)
    };

    try {
      if (datosUsuario) {
        const updatedDatosUsuario = {
          ...datosUsuario,
          fecha: { ...datosUsuario.fecha, [`fecha${Object.keys(datosUsuario.fecha).length + 1}`]: nuevaFecha },
          pecho: { ...datosUsuario.pecho, [`pecho${Object.keys(datosUsuario.pecho).length + 1}`]: nuevaEvaluacion.pecho },
          grasaPorcentaje: { ...datosUsuario.grasaPorcentaje, [`grasa${Object.keys(datosUsuario.grasaPorcentaje).length + 1}`]: nuevaEvaluacion.grasaPorcentaje },
          abdomen: { ...datosUsuario.abdomen, [`abdomen${Object.keys(datosUsuario.abdomen).length + 1}`]: nuevaEvaluacion.abdomen },
          pierna: { ...datosUsuario.pierna, [`pierna${Object.keys(datosUsuario.pierna).length + 1}`]: nuevaEvaluacion.pierna },
          pesoKg: { ...datosUsuario.pesoKg, [`peso${Object.keys(datosUsuario.pesoKg).length + 1}`]: nuevaEvaluacion.pesoKg },
          grasaVisceral: { ...datosUsuario.grasaVisceral, [`grasaVisceral${Object.keys(datosUsuario.grasaVisceral).length + 1}`]: nuevaEvaluacion.grasaVisceral },
          imc: { ...datosUsuario.imc, [`imc${Object.keys(datosUsuario.imc).length + 1}`]: nuevaEvaluacion.imc }
        };

        await axios.put(`https://6668e270f53957909ff9675e.mockapi.io/evolucion/${datosUsuario.id}`, updatedDatosUsuario);
        setMensaje('Evaluación actualizada con éxito');
        setTipoAviso('exito');
        resetForm();
        navigate('/EvaluacionUsuario');
      } else {
        const nuevaEvaluacionCompleta = {
          idCliente: parseInt(usuarioId),
          fecha: { fecha1: nuevaFecha },
          pecho: { pecho1: nuevaEvaluacion.pecho },
          grasaPorcentaje: { grasa1: nuevaEvaluacion.grasaPorcentaje },
          abdomen: { abdomen1: nuevaEvaluacion.abdomen },
          pierna: { pierna1: nuevaEvaluacion.pierna },
          pesoKg: { peso1: nuevaEvaluacion.pesoKg },
          alturaM: nuevaEvaluacion.alturaM,
          objetivo: nuevaEvaluacion.objetivo,
          grasaVisceral: { grasaVisceral1: nuevaEvaluacion.grasaVisceral },
          imc: { imc1: nuevaEvaluacion.imc }
        };

        await axios.post('https://6668e270f53957909ff9675e.mockapi.io/evolucion', nuevaEvaluacionCompleta);
        setMensaje('Evaluación registrada con éxito');
        setTipoAviso('exito');
        resetForm();
        navigate('/EvaluacionUsuario');
      }
    } catch (error) {
      setMensaje('Error al registrar la evaluación');
      setTipoAviso('error');
    }
  };

  return (
    <div className="contenedor-registrar-evaluacion">
      <form className="registro-evaluacion" onSubmit={handleSubmit}>
        <h4>Objetivo</h4>
        <input type="text" value={objetivo} onChange={(e) => setObjetivo(e.target.value)} placeholder="Ingresa tu objetivo" />
        <h4>Pecho (cm)</h4>
        <input type="text" value={pecho1} onChange={(e) => setPecho1(e.target.value)} placeholder="Ingresa las medidas de pecho en (cm)" />
        <h4>Porcentaje de grasa (%)</h4>
        <input type="text" value={grasa1} onChange={(e) => setGrasa1(e.target.value)} placeholder="Ingresa el porcentaje de grasa en (%)" />
        <h4>Abdomen (cm)</h4>
        <input type="text" value={abdomen1} onChange={(e) => setAbdomen1(e.target.value)} placeholder="Ingresa las medidas de abdomen en (cm)" />
        <h4>Pierna (cm)</h4>
        <input type="text" value={pierna1} onChange={(e) => setPierna1(e.target.value)} placeholder="Ingresa las medidas de pierna en (cm)" />
        <h4>Peso (kg)</h4>
        <input type="text" value={peso1} onChange={(e) => setPeso1(e.target.value)} placeholder="Ingresa las medidas de peso en (kg)" />
        <h4>Altura (m)</h4>
        <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Ingresa las medidas de altura en (m)" />
        <h4>Porcentaje de grasa visceral (%)</h4>
        <input type="text" value={grasaVisceral1} onChange={(e) => setGrasaVisceral1(e.target.value)} placeholder="Ingresa el porcentaje de grasa visceral en (%)" />
        <h4>IMC (kg/m²)</h4>
        <input type="text" value={imc1} onChange={(e) => setImc1(e.target.value)} placeholder="Ingresa tu IMC en(kg/m²)" />
        <button type="submit">Registrar Evaluación</button>
        <Aviso mensaje={mensaje} tipo={tipoAviso} />
      </form>
    </div>
  );
};

export default RegistroEvaluacionUsuario;

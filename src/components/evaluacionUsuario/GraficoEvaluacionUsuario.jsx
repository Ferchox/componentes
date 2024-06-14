import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import "./GraficoEvaluacionUsuario.css";

const opcionesIniciales = [
  { nombre: "Pecho", key: "pecho", unidad: "cm" },
  { nombre: "Grasa Porcentaje", key: "grasaPorcentaje", unidad: "%" },
  { nombre: "Abdomen", key: "abdomen", unidad: "cm" },
  { nombre: "Pierna", key: "pierna", unidad: "cm" },
  { nombre: "Peso", key: "pesoKg", unidad: "kg" },
  { nombre: "Grasa Visceral", key: "grasaVisceral", unidad: "%" },
  { nombre: "IMC", key: "imc", unidad: "kg/m²" }
];

const GraficoEvaluacionUsuario = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);
  const [datosUsuario, setDatosUsuario] = useState(null);
  const usuarioId = sessionStorage.getItem('usuarioId');

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

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setOpcionSeleccionada(prev => prev === 0 ? opcionesIniciales.length - 1 : prev - 1);
    } else if (direction === "right") {
      setOpcionSeleccionada(prev => prev === opcionesIniciales.length - 1 ? 0 : prev + 1);
    }
  };

  if (!datosUsuario) {
    return <div>Loading...</div>;
  }

  const opcionActual = opcionesIniciales[opcionSeleccionada];
  const fechas = Object.keys(datosUsuario.fecha).map(key => datosUsuario.fecha[key]);
  const valores = Object.keys(datosUsuario[opcionActual.key]).map(key => datosUsuario[opcionActual.key][key]);

  const dataSeleccionada = fechas.map((fecha, index) => ({
    fecha: new Date(fecha * 1000).toLocaleDateString(),
    valor: valores[index]
  }));

  const series = [
    {
      type: "bar",
      stack: "",
      yAxisKey: "valor",
      data: dataSeleccionada.map(item => item.valor),
    },
  ];

  return (
    <div className="contenedor-grafico">
      <div className="titulo">
        <span className="arrow-left" onClick={() => handleArrowClick("left")}>
          ←
        </span>
        <h1>{opcionActual.nombre}</h1>
        <span className="arrow-right" onClick={() => handleArrowClick("right")}>
          →
        </span>
      </div>
      <div className="contenedor-progreso">
        <ChartContainer
          series={series}
          width={400}
          height={400}
          xAxis={[
            {
              id: "fechas",
              data: dataSeleccionada.map(item => {
                const [dia, mes, año] = item.fecha.split("/");
                return `${mes}/${año}`;
              }),
              scaleType: "band",
              valueFormatter: value => value.toString(),
            },
          ]}
          yAxis={[
            {
              id: "valor",
              scaleType: "linear",
            },
          ]}
        >
          <BarPlot />
          <ChartsXAxis label="Fechas" position="bottom" axisId="fechas" />
          <ChartsYAxis
            label={`Resultados (${opcionActual.unidad})`}
            position="left"
            axisId="valor"
          />
        </ChartContainer>
      </div>
    </div>
  );
}

export default GraficoEvaluacionUsuario;

import * as React from "react";
import { useState } from "react";
import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import "./GraficoEvaluacionUsuario.css";

const opciones = [
  {
    nombre: "Antebrazo",
    data: [
      { fecha: "11/01/24", valor: 20.1 },
      { fecha: "12/02/24", valor: 20.5 },
      { fecha: "13/03/24", valor: 20.8 },
      { fecha: "14/04/24", valor: 20.1 },
    ],
    unidad: "cm",
  },
  {
    nombre: "Muñeca",
    data: [
      { fecha: "11/01/24", valor: 5.1 },
      { fecha: "12/02/24", valor: 4.5 },
      { fecha: "13/03/24", valor: 7.8 },
      { fecha: "14/04/24", valor: 6.1 },
    ],
    unidad: "cm",
  },
];

export default function GraficoEvaluacionUsuario() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setOpcionSeleccionada((prev) =>
        prev === 0 ? opciones.length - 1 : prev - 1
      );
    } else if (direction === "right") {
      setOpcionSeleccionada((prev) =>
        prev === opciones.length - 1 ? 0 : prev + 1
      );
    }
  };

  const dataSeleccionada = opciones[opcionSeleccionada].data;
  const unidadSeleccionada = opciones[opcionSeleccionada].unidad;

  const series = [
    {
      type: "bar",
      stack: "",
      yAxisKey: "valor",
      data: dataSeleccionada.map((item) => item.valor),
    },
  ];

  return (
    <div className="contenedor-grafico">
      <div className="titulo">
        <span className="arrow-left" onClick={() => handleArrowClick("left")}>
          ←
        </span>
        <h1>{opciones[opcionSeleccionada].nombre}</h1>
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
              data: dataSeleccionada.map((item) => {
                const [dia, mes, año] = item.fecha.split("/");
                return `${mes}/${año}`;
              }),
              scaleType: "band",
              valueFormatter: (value) => value.toString(),
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
            label={`Resultados (${unidadSeleccionada})`}
            position="left"
            axisId="valor"
          />
        </ChartContainer>
      </div>
    </div>
  );
}

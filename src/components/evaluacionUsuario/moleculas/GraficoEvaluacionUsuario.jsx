import * as React from 'react';
import { useState } from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import "./GraficoEvaluacionUsuario.css"; 

const opciones = [
  {
    nombre: "Antebrazo",
    data: [
      { mes: "Enero", valor: 20.1 },
      { mes: "Febrero", valor: 20.5 },
      { mes: "Marzo", valor: 20.8 },
      { mes: "Abril", valor: 20.1 },
    ],
    unidad: "cm", 
  },
  {
    nombre: "Muñeca",
    data: [
      { mes: "Enero", valor: 5.1 },
      { mes: "Febrero", valor: 4.5 },
      { mes: "Marzo", valor: 7.8 },
      { mes: "Abril", valor: 6.1 },
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
      type: 'bar',
      stack: '',
      yAxisKey: 'valor', 
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
              id: 'meses',
              data: dataSeleccionada.map((item) => item.mes),
              scaleType: 'band',
              valueFormatter: (value) => value.toString(),
            },
          ]}
          yAxis={[
            {
              id: 'valor',
              scaleType: 'linear',
            },
          ]}
        >
          <BarPlot />
          <ChartsXAxis label="Meses" position="bottom" axisId="meses" />
          <ChartsYAxis label={`Resultados (${unidadSeleccionada})`} position="left" axisId="valor" /> 
        </ChartContainer>
      </div>
    </div>
  );
}
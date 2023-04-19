import React from "react";
import ReactECharts from "echarts-for-react";

function LineChart({ signaturesByMonth }) {
  const option = {
    title: {
      text: "Firmas por mes",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: signaturesByMonth,
        type: "line",
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "400px" }}
    />
  );
}

export default LineChart;
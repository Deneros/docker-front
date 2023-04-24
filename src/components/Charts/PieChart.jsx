import React from "react";
import ReactECharts from "echarts-for-react";
import "echarts/lib/chart/pie";

function PieChart({ data, title, titleSlice }) {
  if (!data || data.length === 0) {
    return null;
  }

  const chartData = data.map((item) => ({
    name: item.sender.name,
    value: item.send_count,
  }));

  const option = {
    title: {
      text: title,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: chartData.map((item) => item.name),
    },
    series: [
      {
        name: titleSlice,
        type: "pie",

        data: chartData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: "400px" }} />
  );
}

export default PieChart;

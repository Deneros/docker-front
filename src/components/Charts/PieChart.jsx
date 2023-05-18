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
  const colors = ["#73C0DE", "#EE6666", "#FAC858", "#91CC75", "#5470C6"];

  const option = {
    title: {
      text: title,
      left: "center",
    },
    tooltip: {
      show: "item",
      /* formatter: "{a} <br/>{b}: {c} ({d}%)", */
    },
    legend: {
      orient: "vertical",
      right: "right",
      top: 'center',
      data: chartData.map((item) => item.name),
    },
    series: [
      {
        center: ['40%', '50%'],
        name: titleSlice,
        type: "pie",
        data: chartData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          itemStyle: {
            color: (params) => colors[params.dataIndex]
          }
        },
        label: {
          show: false
        }
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: "250px" }} />
  );
}

export default PieChart;

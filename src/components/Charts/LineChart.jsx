import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';

function CustomLineChart({ monthlyCounts }) {
  if (!monthlyCounts) {
    return <div>No hay datos disponibles.</div>;
  }

  const months = Object.keys(monthlyCounts);
  const counts = Object.values(monthlyCounts);

  const option = {
    xAxis: {
      type: 'category',
      data: months,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: counts,
        type: 'line',
      },
    ],
  };

  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={{ width: '100%', height: '400px' }}
    />
  );
}

export default CustomLineChart;
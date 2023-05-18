import React from "react";
import ReactECharts from "echarts-for-react";

function BarChart({ data, title, titleSlice }) {

	if (!data || data.length === 0) {
		return null;
	}

	const chartData = data.map((item) => ({
		name: item.sender.name,
		value: item.send_count,
	}));
	const values = chartData.map(item => item.value);
	const total = values.reduce((a, b) => a + b, 0);
	const percentages = values.map(value => `${((value / total) * 100).toFixed(2)} %`);
	const colors = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];
	
	const option = {
		title: {
			text: title,
			left: "center",
		},
		tooltip: {
			trigger: "item",
			//formatter: "{a} <br/>{b}: {c} ({d}%)",
		},
		yAxis: {
			type: 'category',
			data: percentages,
			axisLine: {
				show: false,
			},
			splitLine: {
				show: false
			}
		},
		xAxis: {
			type: 'value',
			axisLabel: {
				show: false,
			},
			splitLine: {
				show: false
			}
		},
		series: [
			{
				name: titleSlice,
				data: chartData,
				type: 'bar',
				itemStyle: {
					color: (params) => colors[params.dataIndex]
				},
				label: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			}
		]
	};

	return (
		<ReactECharts option={option} style={{ width: "100%", height: "250px" }} />
	);
}

export default BarChart;

import { scaleBand, scaleLinear, max, format } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './axisBottom';
import { AxisLeft } from './axisLeft';
import { Marks } from './marks';

const width = 1000;
const height = 600;
const margin = { top: 20, right: 30, bottom: 65, left: 60 };
const xAxisLabelOffset = 50;
const siFormat = format(".2s");
const xAxisFormat = tickValue => siFormat(tickValue).replace('G', 'B');

export const PopulationBar = () => {
  const data = useData();

  if (!data) {
    // return <pre className="loading">Loading...</pre>;
    return <pre className="loading"></pre>;
  }

  const innerHeight = height - margin.bottom - margin.top;
	const innerWidth = width - margin.right - margin.left;
  
  const xValue = d => d.Population;
  const yValue = d => d.Country;
  
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);
  
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
  	.paddingInner(0.15);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`} >
        <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisFormat} />
        <AxisLeft yScale={yScale} />
        <text className="axis-label" x={innerWidth / 2} y={innerHeight + xAxisLabelOffset} textAnchor="middle">Population</text>
        <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} tooltipFormat={xAxisFormat} />
      </g>
  </svg>
  );
};
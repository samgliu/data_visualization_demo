import { format, max, scaleBand, scaleLinear } from 'd3';

import AxisBottom from '../../util/AxisBottom';
import { AxisLeft } from '../../util/AxisLeft';
import { Marks } from '../../util/Marks';
import { useData } from '../../util/useData';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisLabelOffset = 50;

const VisualizationPopulationD3 = () => {
  const csvUrl =
    'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
  const data = useData(csvUrl);
  if (!data) return <pre>Loading</pre>;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d: { Population: any }) => d.Population;
  const yValue = (d: { Country: any }) => d.Country;

  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue: number) =>
    siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)] as any)
    .range([0, innerWidth]);

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  console.log(data[0]);
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          Population
        </text>
        <AxisLeft yScale={yScale} />
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};

export default VisualizationPopulationD3;

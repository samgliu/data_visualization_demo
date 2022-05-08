import { extent, scaleLinear, scaleTime, timeFormat } from 'd3';

import { AxisBottom } from '../../util/AxisBottom';
import { AxisLeftForPlot } from '../../util/AxisLeftForPlot';
import { MarksForLine } from '../../util/MarksForLine';
import { useTempData } from '../../util/useTempData';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const VisualizationTempD3 = () => {
  const data = useTempData();
  if (!data) return <pre>Loading</pre>;

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d: any) => d.timestamp;
  const xAxisLabel = 'Time';

  const yValue = (d: any) => d.temperature;
  const yAxisLabel = 'Temperature';

  const xAxisTickFormat = timeFormat('%a');
  
  const xScale = scaleTime()
    .domain(extent(data, xValue) as any)
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue) as any)
    .range([innerHeight, 0])
    .nice();

  console.log(data[0]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeftForPlot
          yScale={yScale}
          innerWidth={innerWidth}
          tickOffset={5}
        />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <MarksForLine
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={7}
        />
      </g>
    </svg>
  );
};

export default VisualizationTempD3;

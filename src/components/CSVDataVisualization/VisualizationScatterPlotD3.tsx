import {
  bin,
  extent,
  max,
  scaleLinear,
  scaleTime,
  sum,
  timeFormat,
  timeMonths,
} from 'd3';

import { AxisBottom } from '../../util/AxisBottom';
import { AxisLeftForPlot } from '../../util/AxisLeftForPlot';
import { MarksForMigrants } from '../../util/MarksForMigrants';
import { useMigrantsData } from '../../util/useMigrantsData';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const VisualizationScatterPlotD3 = () => {
  const data = useMigrantsData();
  if (!data) return <pre>Loading</pre>;

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d: any) => d['Reported Date'];
  const xAxisLabel = 'Reported Date';

  const yValue = (d: any) => d['Total Dead and Missing'];
  const yAxisLabel = 'Total Dead and Missing';

  const xAxisTickFormat = timeFormat('%m/%d/%Y');

  const xScale = scaleTime()
    .domain(extent(data, xValue) as any)
    .range([0, innerWidth])
    .nice();

  const [start, stop] = xScale.domain();
  const binnedData = bin()
    .value(xValue)
    .domain(xScale.domain() as any)
    .thresholds(timeMonths(start, stop) as any)(data)
    .map((array) => ({
      y: sum(array, yValue),
      x0: array.x0,
      x1: array.x1,
    }));

  const yScale = scaleLinear()
    .domain([0, max(binnedData, (d) => d.y) as any])
    .range([innerHeight, 0])
    .nice();

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
        <MarksForMigrants
          binnedData={binnedData}
          xScale={xScale}
          yScale={yScale}
          tooltipFormat={(d: any) => d}
          innerHeight={innerHeight}
        />
      </g>
    </svg>
  );
};

export default VisualizationScatterPlotD3;

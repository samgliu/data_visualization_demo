import { extent, format, scaleLinear } from 'd3';

import { AxisBottom } from '../../util/AxisBottom';
import { AxisLeftForPlot } from '../../util/AxisLeftForPlot';
import Dropdown from '../Dropdown';
import { MarksForPlot } from '../../util/MarksForPlot';
import { useIrisData } from '../../util/useIrisData';
import { useState } from 'react';

const width = 960;
const menuHeight = 75;
const height = 500 - menuHeight;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const attributes = [
  { value: 'sepal_length', label: 'Sepal Length' },
  { value: 'sepal_width', label: 'Sepal Width' },
  { value: 'petal_length', label: 'Petal Length' },
  { value: 'petal_width', label: 'Petal Width' },
  { value: 'species', label: 'Species' },
];

const getLabel = (value: string): string | undefined => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
};

const VisualizationPlotD3 = () => {
  const data = useIrisData();

  const initialXAttribute = 'petal_length';
  const xValue = (d: any) => d[xAttribute];
  const [xAttribute, setXAttribute] = useState<string>(initialXAttribute);
  const xAxisLabel = getLabel(xAttribute);

  const initialYAttribute = 'sepal_width';
  const [yAttribute, setYAttribute] = useState<string>(initialYAttribute);
  const yValue = (d: any) => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);

  if (!data) return <pre>Loading</pre>;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue: number) =>
    siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear()
    .domain(extent(data, xValue) as any)
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue) as any)
    .range([0, innerHeight]);

  console.log(data[0]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          marginLeft: 100,
        }}
      >
        <label htmlFor="x-select">X-Axis:</label>
        <Dropdown
          options={attributes}
          id={'x-select'}
          selectedValue={xAttribute}
          onSelectedValueChange={setXAttribute}
        />
        <label htmlFor="y-select">Y-Axis:</label>
        <Dropdown
          options={attributes}
          id={'y-select'}
          selectedValue={yAttribute}
          onSelectedValueChange={setYAttribute}
        />
      </div>

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
          <MarksForPlot
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
    </>
  );
};

export default VisualizationPlotD3;

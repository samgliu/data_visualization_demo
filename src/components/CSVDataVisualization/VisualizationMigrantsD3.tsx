import VisualizationMigrantsMapD3 from './VisualizationMigrantsMapD3';
import VisualizationScatterPlotD3 from './VisualizationScatterPlotD3';
import { useMigrantsData } from '../../util/useMigrantsData';
import { useState } from 'react';
import { useWorldmapData } from '../../util/useWorldmapData';

const width = 960;
const height = 500;
const dateHistogramSize = 0.2;

const xValue = (d: any) => d['Reported Date'];

const VisualizationMigrantsD3 = () => {
  const worldAtlas = useWorldmapData();
  const data: any[] | null = useMigrantsData();
  const [brushExtent, setBrushExtent] = useState();

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  const filteredData = brushExtent
    ? data.filter((d: any) => {
        const date = xValue(d);
        return date > brushExtent[0] && date < brushExtent[1];
      })
    : data;

  return (
    <svg width={width} height={height}>
      <VisualizationMigrantsMapD3 data={filteredData} worldAtlas={worldAtlas} />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <VisualizationScatterPlotD3
          data={data}
          width={width}
          height={dateHistogramSize * height}
          setBrushExtent={setBrushExtent}
          xValue={xValue}
        />
      </g>
    </svg>
  );
};

export default VisualizationMigrantsD3;

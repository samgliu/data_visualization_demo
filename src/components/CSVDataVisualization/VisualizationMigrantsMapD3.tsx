import { max, scaleSqrt } from 'd3';

import { MarksForWorldmap } from '../../util/MarksForWorldmap';
import { useMigrantsData } from '../../util/useMigrantsData';
import { useWorldmapData } from '../../util/useWorldmapData';

const width = 960;
const height = 500;
const maxRadius = 16;

const VisualizationMigrantsMapD3 = () => {
  const worldAtlas = useWorldmapData();
  const data = useMigrantsData();

  if (!worldAtlas || !data) return <pre>Loading</pre>;

  const sizeValue = (d: any) => d['Total Dead and Missing'];
  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)] as any)
    .range([0, maxRadius]);
  console.log(data && data[0]);
  return (
    <svg width={width} height={height}>
      <MarksForWorldmap
        worldAtlas={worldAtlas}
        data={data}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
};

export default VisualizationMigrantsMapD3;

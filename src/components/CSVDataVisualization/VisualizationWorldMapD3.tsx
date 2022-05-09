import { max, scaleSqrt } from 'd3';

import { MarksForWorldmap } from '../../util/MarksForWorldmap';
import { useWorldmapCitiesData } from '../../util/useWorldmapCitiesData';
import { useWorldmapData } from '../../util/useWorldmapData';

const width = 960;
const height = 500;
const maxRadius = 16;

const VisualizationWorldMapD3 = () => {
  const worldAtlas = useWorldmapData();
  const worldCities = useWorldmapCitiesData();

  if (!worldAtlas || !worldCities) return <pre>Loading</pre>;

  const sizeValue = (d: any) => d.population;
  const sizeScale = scaleSqrt()
    .domain([0, max(worldCities, sizeValue)] as any)
    .range([0, maxRadius]);

  return (
    <svg width={width} height={height}>
      <MarksForWorldmap
        worldAtlas={worldAtlas}
        worldCities={worldCities}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
};

export default VisualizationWorldMapD3;

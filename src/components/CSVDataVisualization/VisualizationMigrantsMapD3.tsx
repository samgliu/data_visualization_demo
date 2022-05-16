import { max, scaleSqrt } from 'd3';

import { MarksForWorldmap } from '../../util/MarksForWorldmap';
import { useMemo } from 'react';

const maxRadius = 15;
const sizeValue = (d: any) => d['Total Dead and Missing'];

const VisualizationMigrantsMapD3 = ({
  data,
  worldAtlas,
  filteredData,
}: {
  data: any;
  worldAtlas: any;
  filteredData: any;
}) => {
  const sizeScale = useMemo(
    () =>
      scaleSqrt()
        .domain([0, max(data, sizeValue)] as any)
        .range([0, maxRadius]),
    [data]
  );

  return (
    <MarksForWorldmap
      worldAtlas={worldAtlas}
      data={filteredData}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  );
};

export default VisualizationMigrantsMapD3;

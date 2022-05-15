import { max, scaleSqrt } from 'd3';

import { MarksForWorldmap } from '../../util/MarksForWorldmap';

const maxRadius = 15;

const VisualizationMigrantsMapD3 = ({
  data,
  worldAtlas,
}: {
  data: any;
  worldAtlas: any;
}) => {
  const sizeValue = (d: any) => d['Total Dead and Missing'];
  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)] as any)
    .range([0, maxRadius]);
  console.log(data && data[0]);
  return (
    <MarksForWorldmap
      worldAtlas={worldAtlas}
      data={data}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  );
};

export default VisualizationMigrantsMapD3;

import { MarksForWorldmap } from '../../util/MarksForWorldmap';
import { useWorldmapData } from '../../util/useWorldmapData';

const width = 960;
const height = 500;

const VisualizationWorldMapD3 = () => {
  const data = useWorldmapData();
  if (!data) return <pre>Loading</pre>;

  console.log(data[0]);

  return (
    <svg width={width} height={height}>
      <MarksForWorldmap data={data} />
    </svg>
  );
};

export default VisualizationWorldMapD3;

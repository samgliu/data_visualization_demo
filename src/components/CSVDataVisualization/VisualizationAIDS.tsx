import { interpolateYlOrRd, max, scaleSequential } from 'd3';

import { Marks } from '../../util/MarksForAIDS';
import { useAIDSCodes } from '../../util/useAIDSCodes';
import { useAIDSData } from '../../util/useAIDSData';
import { useWorldAtlas } from '../../util/useWorldAtlas';

const width = 960;
const height = 500;
const selectedYear = '2017';
const VisualizationAIDS = () => {
  const worldAtlas = useWorldAtlas();
  const data: any | null = useAIDSData();
  const codes: any | null = useAIDSCodes();

  if (!worldAtlas || !data || !codes) {
    return <pre>Loading...</pre>;
  }

  if (!codes || !data) return null;

  const numericCodeByAlphaCode = new Map();
  codes.forEach((code: any) => {
    const alpha3Code = code['alpha-3'];
    const numericCode = code['country-code'];
    numericCodeByAlphaCode.set(alpha3Code, numericCode);
  });

  const filteredData = data.filter((d: any) => d.Year === selectedYear);

  const rowByNumericCode = new Map();
  filteredData.forEach((d: any) => {
    const alpha3Code = d.Code;
    const numericCode = numericCodeByAlphaCode.get(alpha3Code);
    rowByNumericCode.set(numericCode, d);
  });

  const colorValue = (d: any) => d.aids;

  const colorScale = scaleSequential(interpolateYlOrRd).domain([
    0,
    max(data, colorValue),
  ] as any);

  return (
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        rowByNumericCode={rowByNumericCode}
        colorScale={colorScale}
        colorValue={colorValue}
      />
    </svg>
  );
};
export default VisualizationAIDS;

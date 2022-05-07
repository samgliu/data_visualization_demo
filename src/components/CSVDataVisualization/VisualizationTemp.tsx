import { chartGenerator } from '../../util/chartGenerator';
import { useEffect } from 'react';

const VisualizationTemp = () => {
  const csvUrl =
    'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv';

  useEffect(() => {
    chartGenerator(csvUrl, 'temp');
  }, []);
  return <div id="chart-container" style={{ padding: 1 }}></div>;
};

export default VisualizationTemp;

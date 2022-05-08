import { chartGenerator } from '../../util/chartGenerator';
import { useEffect } from 'react';

const VisualizationPopulation = () => {
  const csvUrl =
    'https://gist.githubusercontent.com/nitanagdeote/9dfe4bbb6726f54ce28f135286b8f246/raw/4cd8d3c0c2a0ff42dda5925b8e801610a1256ba3/religionByCountryTop20.csv';

  useEffect(() => {
    chartGenerator(csvUrl, 'population');
  }, []);
  return <div id="chart-container" style={{ padding: 1 }}></div>;
};

export default VisualizationPopulation;

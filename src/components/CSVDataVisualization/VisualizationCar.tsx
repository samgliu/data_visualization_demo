import { chartGenerator } from '../../util/chartGenerator';
import { useEffect } from 'react';

const VisualizationCar = () => {
  const csvUrl =
    'https://gist.githubusercontent.com/curran/8c131a74b85d0bb0246233de2cff3f52/raw/194c2fc143790b937c42bf086a5a44cb3c55340e/auto-mpg.csv';

  useEffect(() => {
    chartGenerator(csvUrl, 'car');
  }, []);
  return <div id="chart-container" style={{ padding: 1 }}></div>;
};

export default VisualizationCar;

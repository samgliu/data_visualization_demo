import { mpg } from '../CSVDataVisualization/mpgGenerator';
import { useEffect } from 'react';

const MPGVisualization = () => {
  useEffect(() => {
    mpg();
  }, []);
  return <div id="mpg-container" style={{ padding: 1 }}></div>;
};

export default MPGVisualization;

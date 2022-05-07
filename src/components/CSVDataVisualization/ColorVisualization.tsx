import React, { useEffect, useState } from 'react';

import { csv } from 'd3';
import { message } from './messages';

const ColorVisualization = () => {
  const csvUrl =
    'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv';
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    csv(csvUrl).then((d) => setData(d));
  }, []);

  return React.createElement('pre', null, data ? message(data) : 'Loading...');
};

export default ColorVisualization;


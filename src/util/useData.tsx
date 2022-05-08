import { useEffect, useState } from 'react';

import { csv } from 'd3';

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const row = (d: any) => {
      d.Population = +d['2020'];
      return d;
    };
    csv(csvUrl, row).then((data) => setData(data.slice(0, 10)));
  }, [csvUrl]);
  return data;
};

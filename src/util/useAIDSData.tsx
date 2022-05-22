import { useEffect, useState } from 'react';

import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/470752f12c027f8ff4266e7c96f26a56/raw/66908b56e371e7c9f5a1c0911ac3250f570a4c83/share-of-population-infected-with-hiv-ihme.csv';

const row = (d: any) => {
  d.aids =
    +d['Prevalence - HIV/AIDS - Sex: Both - Age: 15-49 years (Percent) (%)'];
  return d;
};

export const useAIDSData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then((d: any) => setData(d));
  }, []);

  return data;
};

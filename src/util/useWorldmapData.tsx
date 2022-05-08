import { feature, mesh } from 'topojson';
import { useEffect, useState } from 'react';

import { json } from 'd3';

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const useWorldmapData = () => {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    json(jsonUrl).then((topology: any) => {
      const { countries, land } = topology.objects;
      setData({
        land: feature(topology, land),
        interiors: mesh(topology, countries, (a, b) => a !== b),
      } as any);
    });
  }, []);

  return data;
};

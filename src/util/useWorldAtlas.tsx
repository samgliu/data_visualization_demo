import { feature, mesh } from 'topojson';
import { useEffect, useState } from 'react';

import { json } from 'd3';

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const useWorldAtlas = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then((topology: any) => {
      const { countries }: { countries: any } = topology.objects;
      setData({
        countries: feature(topology, countries),
        interiors: mesh(topology as any, countries, (a, b) => a !== b),
      } as any);
    });
  }, []);

  return data;
};

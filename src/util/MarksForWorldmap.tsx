import { geoGraticule, geoNaturalEarth1, geoPath } from 'd3';

interface MarksForPlotProps {
  data: any;
}

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const MarksForWorldmap = ({
  data: { land, interiors },
}: MarksForPlotProps) => {
  return (
    <g className="marks">
      <path className="sphere" d={path({ type: 'Sphere' }) as any} />
      <path className="graticules" d={path(graticule()) as any} />
      {land.features.map((feature: any, index: number) => (
        <path
          key={`worldmap-${index}`}
          className="land"
          d={path(feature) as any}
        />
      ))}
      <path className="interiors" d={path(interiors) as any} />
    </g>
  );
};

import { geoGraticule, geoNaturalEarth1, geoPath } from 'd3';

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const missingDataColor = 'gray';

export const Marks = ({
  worldAtlas: { countries, interiors },
  rowByNumericCode,
  colorScale,
  colorValue,
}: any) => (
  <g className="marks">
    <path className="sphere" d={path({ type: 'Sphere' }) as any} />
    <path className="graticules" d={path(graticule()) as any} />
    {!!countries &&
      countries.features.map((feature: any) => {
        const d = rowByNumericCode.get(feature.id);
        if (!d) {
          console.log(feature.properties.name);
        }
        return (
          <path
            fill={d ? colorScale(colorValue(d)) : missingDataColor}
            d={path(feature) as any}
          />
        );
      })}
    <path className="interiors" d={path(interiors) as any} />
  </g>
);

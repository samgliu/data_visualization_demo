import React, { useEffect, useState } from 'react';
import { arc, csv, pie } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc().innerRadius(0).outerRadius(width) as any;
const colorPie = pie().value(1);
const VisualizationColor = () => {
  const csvUrl =
    'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv';
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    csv(csvUrl).then((d) => setData(d));
  }, []);
  if (!data) return <pre>Loading</pre>;
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map((d: any, index: number) => (
          <path key={index} fill={d.data['RGB hex value']} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  );
};

export default VisualizationColor;

// To compute the arcs manually (without d3.pie):
// data.map((d, i) => (
//   <path
//     fill={d['RGB hex value']}
//     d={pieArc({
//       startAngle: (i / data.length) * 2 * Math.PI,
//       endAngle: ((i + 1) / data.length) * 2 * Math.PI
//     })}
//   />
// ))

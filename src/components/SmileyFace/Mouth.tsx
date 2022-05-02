import { arc } from 'd3';

const Mouth = ({
  mouthRadius,
  mouthWidth,
}: {
  mouthRadius: number;
  mouthWidth: number;
}) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2) as any;
  return <path d={mouthArc()} />;
};

export default Mouth;

export const AxisLeftForPlot = ({
  yScale,
  innerWidth,
  tickOffset = 3,
}: {
  yScale: any;
  innerWidth: number;
  tickOffset?: number;
}) =>
  yScale.ticks().map((tickValue: any, index: number) => (
    <g
      key={tickValue + '-' + index}
      className="tick"
      transform={`translate(0,${yScale(tickValue)})`}
    >
      <line x2={innerWidth} />
      <text style={{ textAnchor: 'end' }} x={-tickOffset} dy=".32em">
        {tickValue}
      </text>
    </g>
  ));

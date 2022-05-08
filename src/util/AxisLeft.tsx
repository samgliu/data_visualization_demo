export const AxisLeft = ({
  yScale,
  innerWidth,
  tickOffset = 3,
}: {
  yScale: any;
  innerWidth: number;
  tickOffset?: number;
}) =>
  yScale.domain().map((tickValue: any, index: number) => (
    <g
      key={tickValue + '-' + index}
      className="tick"
      transform={`translate(0,${yScale(tickValue) + yScale.bandwidth() / 2})`}
    >
      <line x2={innerWidth} />
      <text
        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-tickOffset}
        dy=".32em"
      >
        {tickValue}
      </text>
    </g>
  ));

export const AxisBottom = ({
  xScale,
  innerHeight,
  tickFormat,
  tickOffset = 3,
}: {
  xScale: any;
  innerHeight: number;
  tickFormat: any;
  tickOffset?: number;
}) =>
  xScale.ticks().map((tickValue: number, index: number) => (
    <g
      key={tickValue + '-' + index}
      className="tick"
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight} />
      <text
        style={{ textAnchor: 'middle' }}
        dy=".71em"
        y={innerHeight + tickOffset}
      >
        {tickFormat(tickValue)}
      </text>
    </g>
  ));

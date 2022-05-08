export const AxisLeft = ({ yScale }: { yScale: any }) =>
  yScale.domain().map((tickValue: any) => (
    <g className="tick">
      <text
        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-3}
        dy=".32em"
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    </g>
  ));

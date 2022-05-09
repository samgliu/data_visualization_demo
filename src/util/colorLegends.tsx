interface colorLegendProps {
  colorScale: any;
  tickSpacing: number;
  tickSize: number;
  tickTextOffset: number;
}
export const ColorLegend = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 10,
  tickTextOffset = 20,
}: colorLegendProps): JSX.Element =>
  colorScale.domain().map((domainValue: string, i: number) => (
    <g key={i} className="tick" transform={`translate(0,${i * tickSpacing})`}>
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">
        {domainValue}
      </text>
    </g>
  ));

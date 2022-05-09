interface colorLegendProps {
  colorScale: any;
  tickSpacing: number;
  tickSize: number;
  tickTextOffset: number;
  onHover: (domainValue: any) => any;
  hoveredValue: string | null;
  fadedOpacity: number;
}
export const ColorLegend = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 10,
  tickTextOffset = 20,
  onHover,
  hoveredValue,
  fadedOpacity = 0.2,
}: colorLegendProps): JSX.Element =>
  colorScale.domain().map((domainValue: string, i: number) => (
    <g
      key={i}
      className="tick"
      transform={`translate(0,${i * tickSpacing})`}
      onMouseEnter={() => {
        onHover(domainValue);
      }}
      onMouseOut={() => {
        onHover(null);
      }}
      opacity={hoveredValue && domainValue !== hoveredValue ? fadedOpacity : 1}
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">
        {domainValue}
      </text>
    </g>
  ));

interface MarksProps {
  binnedData: any;
  xScale: any;
  yScale: any;
  tooltipFormat: any;
  innerHeight: any;
}

export const MarksForMigrants = ({
  binnedData,
  xScale,
  yScale,
  tooltipFormat,
  innerHeight,
}: MarksProps) =>
  binnedData.map((d: any, index: number) => (
    <rect
      key={index}
      className="marks"
      x={xScale(d.x0)}
      y={yScale(d.y)}
      width={xScale(d.x1) - xScale(d.x0)}
      height={innerHeight - yScale(d.y)}
    >
      <title>{tooltipFormat(d.y)}</title>
    </rect>
  ));

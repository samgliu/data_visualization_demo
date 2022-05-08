interface MarksProps {
  data: any;
  xScale: any;
  yScale: any;
  xValue: any;
  yValue: any;
  tooltipFormat: any;
}

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
}: MarksProps) =>
  data.map((d: any) => (
    <rect
      className="mark"
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ));

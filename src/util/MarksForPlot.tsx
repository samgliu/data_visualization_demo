interface MarksForPlotProps {
  data: any;
  xScale: any;
  yScale: any;
  xValue: any;
  yValue: any;
  tooltipFormat: any;
  circleRadius: any;
}

export const MarksForPlot = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
}: MarksForPlotProps) =>
  data.map((d: any, index: number) => (
    <circle
      className="mark"
      key={yValue(d) + '-' + index}
      cy={yScale(yValue(d))}
      cx={xScale(xValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));

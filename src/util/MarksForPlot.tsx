interface MarksForPlotProps {
  data: any;
  xScale: any;
  yScale: any;
  colorScale?: any;
  xValue: any;
  yValue: any;
  colorValue?: any;
  tooltipFormat: any;
  circleRadius: any;
}

export const MarksForPlot = ({
  data,
  xScale,
  yScale,
  colorScale,
  xValue,
  yValue,
  colorValue,
  tooltipFormat,
  circleRadius,
}: MarksForPlotProps) =>
  data.map((d: any, index: number) => (
    <circle
      key={yValue(d) + '-' + index}
      cy={yScale(yValue(d))}
      cx={xScale(xValue(d))}
      fill={!!colorValue && !!colorScale && colorScale(colorValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));

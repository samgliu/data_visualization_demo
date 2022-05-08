import { curveNatural, line } from 'd3';

interface MarksForPlotProps {
  data: any;
  xScale: any;
  yScale: any;
  xValue: any;
  yValue: any;
  tooltipFormat: any;
  circleRadius: any;
}

export const MarksForLine = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
}: // tooltipFormat,
// circleRadius,
MarksForPlotProps) => {
  return (
    <>
      {/* {data.map((d: any, index: number) => ( */}
      <g className="mark">
        <path
          className="path"
          fill="none"
          d={
            line()
              .x((d) => xScale(xValue(d)))
              .y((d) => yScale(yValue(d)))
              .curve(curveNatural)(data as any) as any
          }
        />
        {/* <circle
            className="line-circle"
            key={yValue(d) + '-' + index}
            cy={yScale(yValue(d))}
            cx={xScale(xValue(d))}
            r={circleRadius}
          >
            <title>{tooltipFormat(xValue(d))}</title>
          </circle> */}
      </g>
      {/* )) */}
    </>
  );
};

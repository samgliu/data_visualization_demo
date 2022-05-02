export const FaceContainer = ({
  children,
  width,
  height,
  centerX,
  centerY,
}: any) => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
    </svg>
  );
};

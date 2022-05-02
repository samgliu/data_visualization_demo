const BackgroundCircle = ({
  radius,
  strokeWidth,
}: {
  radius: number;
  strokeWidth: number;
}) => {
  return (
    <circle
      r={radius}
      fill="yellow"
      stroke="black"
      stroke-width={strokeWidth}
    />
  );
};

export default BackgroundCircle;

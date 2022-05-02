import { useCallback, useState } from 'react';

import Circle from '../SmileyFace/Circle';

const MouseFollowingCircle = () => {
  const width = 960;
  const height = 500;
  const circleRadius = 30;
  const offsetX = 25;
  const offsetY = 130;
  const initialMousePosition = { x: width / 2, y: height / 2 };
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  const handleMouseMove = useCallback(
    (event: any) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX - offsetX, y: clientY - offsetY });
    },
    [setMousePosition]
  );

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <Circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
    </svg>
  );
};

export default MouseFollowingCircle;

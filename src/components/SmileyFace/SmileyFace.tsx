import BackgroundCircle from './BackgroundCircle';
import Eyes from './Eyes';
import { FaceContainer } from './FaceContainer';
import Mouth from './Mouth';

const SmileyFace = ({
  width,
  height,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth,
}: any) => {
  const centerX = width / 2;
  const centerY = height / 2;
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle
        radius={(height - strokeWidth) / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <Eyes cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
};

export default SmileyFace;

import SmileyFace from './SmileyFace';
import { range } from 'd3';

const SmileyFaces = () => {
  const faceArray = range(6 * 3);
  return (
    <>
      {faceArray.map((index) => {
        return (
          <SmileyFace
            key={index}
            width={160}
            height={160}
            strokeWidth={6 + Math.random() * 3}
            eyeOffsetX={20 + Math.random() * 9}
            eyeOffsetY={20 + Math.random() * 15}
            eyeRadius={5 + Math.random() * 8}
            mouthWidth={7 + Math.random() * 6}
            mouthRadius={25 + Math.random() * 10}
          />
        );
      })}
    </>
  );
};

export default SmileyFaces;

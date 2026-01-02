import React from 'react';
import Premium3DIntro from './Premium3DIntro';

// Scene3D is just an alias for the Premium3DIntro component to maintain compatibility
const Scene3D: React.FC<{ onIntroComplete?: () => void }> = ({ onIntroComplete }) => {
  return <Premium3DIntro onIntroComplete={onIntroComplete} />;
};

export default Scene3D;
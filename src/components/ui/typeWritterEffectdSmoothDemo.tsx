import React from 'react';
import { TypewriterEffectSmooth } from "./typeWritter-effect.tsx";
import { TextGenerateEffect } from './text-GenerationEffect.tsx';
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: 'Harshal Chopade',
      className: 'white text-6xl',
    },
  ];

  const words2="FrontEnd Developer"
  const words3="I am a FrontEnd Developer currently working from Pune"

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
        <span className="example-spacer"></span>
      <TextGenerateEffect words={words2} />
      <span className="example-spacer"></span>
      <TypewriterEffectSmooth words={words} />
      <span className="example-spacer"></span>
      <TextGenerateEffect words={words3} />
      <span className="example-spacer"></span>
    </div>
  );
}

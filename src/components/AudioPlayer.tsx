import Slider from './Slider';
import { useState } from 'react';
import StopButton from './ui/buttons/StopButton';
import PlayButton from './ui/buttons/PlayButton';

interface AudioPlayerProps {
  readonly item: string | undefined;
  readonly setIsStop: any;
  stopAudio: () => void;
}

function AudioPlayer({ item, stopAudio }: AudioPlayerProps) {
  const defaultValue = '50';

  return (
    <div className="flex items-center w-[350px] p-4 border-[#ccc] border-[1px] relative">
      <div className="flex  p-2 w-[30%]">
        <StopButton onClick={() => stopAudio()} />
        <PlayButton onClick={() => console.log()} />
      </div>
      <Slider value={defaultValue} />
      <div>
        <p className=" text-[14px] absolute left-[8%] bottom-0 w-[100%] ">
          <strong>Tilte:</strong> {item}
        </p>
      </div>
    </div>
  );
}

export default AudioPlayer;

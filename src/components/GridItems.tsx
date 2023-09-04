import React, { useState, useRef, useEffect } from 'react';
import { useDataContext } from '../hooks/useDataContext';
import Container from './ui/container/Container';

interface GridItemsProps {
  readonly setSelectedImageName: React.Dispatch<React.SetStateAction<string>>;
  readonly setIsStop: any;
  readonly isStop: any;
}

interface Record {
  id: string;
  fields: {
    genres: string;
  };
}

function GridItems({ setIsStop, isStop }: GridItemsProps) {
  const { data } = useDataContext();
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = (audioUrl: string) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audio = new Audio(audioUrl);
    setCurrentAudio(audio);
    setIsStop(true);
    audio.play();
  };

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  };

  if (!isStop) {
    setIsStop(stopAudio);
  }

  return <Container variant="medium" className="mx-auto">
    
  </Container>;
}

export default GridItems;

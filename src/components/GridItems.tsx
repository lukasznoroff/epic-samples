import React, { useState, useRef } from 'react';
import { useDataContext } from '../hooks/useDataContext';
import Container from './ui/container/Container';

interface GridItemsProps {
  readonly setSelectedImageName: React.Dispatch<React.SetStateAction<string>>;
  readonly setIsStop: any;
  readonly isStop: any;
}

function GridItems({
  setSelectedImageName,
  setIsStop,
  isStop,
}: GridItemsProps) {
  const { data } = useDataContext();
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );

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

  return (
    <Container variant="medium">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setSelectedImageName(item.fields.name);
            playAudio(item.fields.audio[0].url);
          }}
        >
          <img
            src={item.fields.image[0].url}
            width="100%"
            height="100%"
            alt={item.fields.name}
          />
          <p className="mt-4">{item.fields.name}</p>
        </div>
      ))}

      {/* <button onClick={()=>setStop(stopAudio)} >stop</button> */}

      {/* {data.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setSelectedImageName(item.fields.name);
            if (!currentAudio || currentAudio.paused) {
              playAudio(item.fields.audio[0].url);
            } else {
              stopAudio();
            }
          }}
        >
          <img src={item.fields.image[0].url} width='100%' height='100%' alt='' />
          <p className='mt-4'>{item.fields.name}</p>
        </div>
      ))} */}
    </Container>
  );
}

export default GridItems;

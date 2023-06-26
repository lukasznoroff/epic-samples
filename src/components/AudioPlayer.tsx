import { ReactComponent as StopButton } from '../images/stop-button.svg';
import { ReactComponent as PlayButton } from '../images/play-button.svg';
import Slider from './Slider';

interface AudioPlayerProps {
  data: Array<any>;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ data }) => {
  const defaultValue = '0';

  return (
    <div className='flex items-center space-x-5  p-4 border-[#ccc] border-[1px]'>
      <div>Title</div>
      {data.map((item) => (
        <div key={item.id}>
          {/* <p>{item.fields.name}</p> */}
          {/* {item.fields.audio[0].url} */}
        </div>
      ))}
      <div className='flex  w-[80px] 	justify-between'>
        <StopButton className='cursor-pointer w-[30px] hover:text-neutral-500' />
        <PlayButton className='cursor-pointer w-[30px] hover:text-neutral-500' />
      </div>
      <p className='w-20'>{}</p>
      <Slider value={defaultValue} />
    </div>
  );
};

export default AudioPlayer;

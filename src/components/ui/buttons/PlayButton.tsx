import { MouseEventHandler } from 'react';

import PlayButtonIcon from '../icons/PlayButtonIcon';

interface PlayButtonProps {
  readonly onClick: MouseEventHandler<HTMLDivElement>;
}

const PlayButton = ({ onClick }: PlayButtonProps) => (
  <div
    className="cursor-pointer w-[30px] hover:text-neutral-500"
    onClick={onClick}
  >
    <PlayButtonIcon />
  </div>
);

export default PlayButton;

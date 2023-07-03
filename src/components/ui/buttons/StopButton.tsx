import { MouseEventHandler } from 'react';

import StopButtonIcon from '../icons/StopButtonIcon';

interface StopButtonProps {
  readonly onClick: MouseEventHandler<HTMLDivElement>;
}

const StopButton = ({ onClick }: StopButtonProps) => (
  <div
    className="cursor-pointer w-[30px] hover:text-neutral-500"
    onClick={onClick}
  >
    <StopButtonIcon />
  </div>
);

export default StopButton;

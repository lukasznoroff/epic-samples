import { MouseEventHandler } from 'react';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

interface ToggleButtonProps {
  readonly mobileMenu: boolean;
  readonly setMobileMenu: (value: boolean) => void;
}

const ToggleButton = ({ mobileMenu, setMobileMenu }: ToggleButtonProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <button
      className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
      onClick={handleClick}
    >
      {mobileMenu ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};

export default ToggleButton;

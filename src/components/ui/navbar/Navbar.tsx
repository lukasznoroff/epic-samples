import { clsx } from 'clsx';

import NavLink from './NavLink';
import { navLinks } from './navLinks';
import { useState } from 'react';
import ToggleButton from '../buttons/ToggleButton';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const containerClasses = clsx(
    'mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 transform duration-500 transition-all md:-translate-x-[0%] -translate-x-[150%] absolute',
    {
      'block transition-all duration-500 z-10  transform translate-x-[250%] ':
        mobileMenu,
      'md:relative ': !mobileMenu,
    }
  );

  return (
    <nav className="w-full bg-neutral-200 shadow">
      <div className="w-[95vw] mx-auto justify-between px-4 md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5 ">
            <a href="/">
              <h2 className="text-2xl font-bold">Epic Samples</h2>
            </a>
            <div className="md:hidden">
              <ToggleButton
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={containerClasses}>
            <ul className="items-center justify-center  space-y-8 md:flex md:space-x-6 md:space-y-0 text-black font-medium">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

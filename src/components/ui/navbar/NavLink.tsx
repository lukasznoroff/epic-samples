import { Link } from 'react-router-dom';

interface NavLinkProps {
  readonly to: string;
  readonly children: string;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <li className="hover:text-gray-500">
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavLink;

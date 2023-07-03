import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Home;

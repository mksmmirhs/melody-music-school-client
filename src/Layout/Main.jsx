import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

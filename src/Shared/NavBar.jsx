import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import useAuth from '../hooks/useAuth';
import useCart from '../hooks/useCart';

const NavBar = () => {
  const { user, logOut } = useAuth();

  const menu = (
    <>
      <li>
        <Link to="/" className="text-2xl">
          Home
        </Link>
      </li>

      <li>
        <Link to="/instructors" className="text-2xl">
          Instructors
        </Link>
      </li>

      <li>
        <Link to="classes" className="text-2xl">
          Classes
        </Link>
      </li>
      {user ? (
        <li>
          <Link to="/dashboard" className="text-2xl">
            Dashboard
          </Link>
        </li>
      ) : (
        ''
      )}
      {user ? (
        <button className="btn ms-4" onClick={() => logOut()}>
          Logout
        </button>
      ) : (
        ''
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#68c4bc] p-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm  z-10 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="avatar">
              <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img title={user?.displayName} src={user.photoURL} />
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

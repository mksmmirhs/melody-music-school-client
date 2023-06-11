import React from 'react';
import {
  FaHome,
  FaSchool,
  FaShopify,
  FaShoppingCart,
  FaWallet,
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const dNavbar = (
    <>
      <li>
        <Link to="/dashboard/mycart">
          <FaShoppingCart></FaShoppingCart>My Cart
        </Link>
      </li>
      <li>
        <Link>
          <FaWallet></FaWallet>Payment history
        </Link>
      </li>
      <li>
        <Link>
          <FaSchool></FaSchool> Selected Classes
        </Link>
      </li>
      <li>
        <Link>
          <FaShopify></FaShopify> Enrolled Classes
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaHome></FaHome> Home
        </Link>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">{user?.displayName}</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {dNavbar}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          {dNavbar}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
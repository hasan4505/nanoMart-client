import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    console.log(user);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home" className="hover:bg-red-700">
          Home
        </Link>
      </li>
      <li>
        <Link to="/tools" className="hover:bg-red-700">
          Tools
        </Link>
      </li>
      <li>
        <Link to="/purchase" className="hover:bg-red-700">
          Available Items
        </Link>
      </li>

      <li>
        <Link to="/dashboard" className="hover:bg-red-700">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/review" className="hover:bg-red-700">
          Review
        </Link>
      </li>
      <li>
        <Link to="/blogs" className="hover:bg-red-700">
          Blogs
        </Link>
      </li>
      <li>
        <Link to="/my-portfolio" className="hover:bg-red-700">
          My-portfolio
        </Link>
      </li>
      <li>
        {user ? (
          <div>
            <button
              className="btn bg-teal-700 btn-ghost hover:bg-red-700 normal-case"
              onClick={logout}
            >
              Sign Out
            </button>
            <img src={user.photoURL} alt="" className="w-12 rounded-full" />
          </div>
        ) : (
          <Link to="/login" className="hover:bg-red-700">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-accent-focus sticky top-0">
      <div className="navbar-start  ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary-500 rounded-box w-52 text-dark bg-accent"
          >
            {menuItems}
          </ul>
        </div>
        <img height={20} src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-xl">nanoMart</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;

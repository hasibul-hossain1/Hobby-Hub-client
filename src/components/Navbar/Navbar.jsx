import React from "react";
import Toggle from "../common/Toggle";

function Navbar() {
  return (
    <div className="navbar backdrop-blur-2xl bg-gray-500/30 z-50 shadow-sm mb-4 top-0 fixed ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xl font-bold dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
           <li>
            <a>Home</a>
          </li>
          <li>
            <a>All Groups</a>
          </li>
          <li>
            <a>Create Group</a>
          </li>
          <li>
            <a>My Groups</a>
          </li>
          <li className="md:hidden">
            <a>Login</a>
          </li>
          <li className="md:hidden">
            <a>Register</a>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">HobbyHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>All Groups</a>
          </li>
          <li>
            <a>Create Group</a>
          </li>
          <li>
            <a>My Groups</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <a className="btn border border-secondary hidden md:flex hover:btn-secondary">Login</a>
        <a className="btn btn-secondary hidden md:flex">Register</a>
        <Toggle/>
      </div>
    </div>
  );
}

export default Navbar;

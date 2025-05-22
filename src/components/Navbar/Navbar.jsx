import React from "react";
import Toggle from "../common/Toggle";
import { Link, NavLink } from "react-router";
import { signOUtUser, useUserContext } from "../contexts/FirebaseContext/UserContext";

function Navbar() {
  const [user] = useUserContext();
  console.log(user.userData);
  const handleLogout=()=>{
    signOUtUser()
  }
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
              <NavLink className={({isActive})=>isActive? 'text-blue-400':''} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? 'text-blue-400':''} to='/all'>All Groups</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? 'text-blue-400':''} to='/create'>Create Group</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? 'text-blue-400':''} to='/mygroups'>My Groups</NavLink>
            </li>
            {user.userData ? (
              <li className="md:hidden">
                <button onClick={handleLogout} className="md:hidden">Logout</button>
              </li>
            ) : (
              <>
                <li className="md:hidden">
                  <NavLink className={({isActive})=>isActive ? 'text-blue-400':''} to="/login">Login</NavLink>
                </li>
                <li className="md:hidden">
                  <NavLink className={({isActive})=>isActive ? 'text-blue-400':''} to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">HobbyHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({isActive})=>isActive ? 'text-blue-400':''} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? 'text-blue-400':''}  to='/all'>All Groups</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? 'text-blue-400':''} to='/create'>Create Group</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? 'text-blue-400':''} to='/mygroups'>My Groups</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user.userData ? (
          <>
            <div className="avatar hidden md:flex">
              <div className="w-12 rounded-full">
                <img src={user.userData.photoURL.startsWith('https://')?user.userData.photoURL:'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'} />
              </div>
            </div>
            <button onClick={handleLogout} className="btn btn-primary hidden md:flex">Logout</button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn border border-secondary hidden md:flex hover:btn-secondary"
            >
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary hidden md:flex">
              Register
            </Link>
          </>
        )}
        <Toggle />
      </div>
    </div>
  );
}

export default Navbar;

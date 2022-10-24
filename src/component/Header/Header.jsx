import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='bg-[#1C2B35]'>
        <div className='w-[1200px] mx-auto'>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li className='text-black mx-4'><NavLink to='/'>Home</NavLink></li>
                  <li className='text-black mx-4'><NavLink to='/topics' >Topics</NavLink></li>
                  <li className='text-black'><NavLink to='/statistics' >Statistics</NavLink></li>
                  <li className='text-black mx-4'><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
              </div>
              <Link to='/' className="font-bold uppercase text-white text-xl">DPI quiz contest</Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                  <li className='text-white mx-4'><NavLink to='/'>Home</NavLink></li>
                  <li className='text-white mx-4'><NavLink to='/topics' >Topics</NavLink></li>
                  <li className='text-white mx-4'><NavLink to='/statistics' >Statistics</NavLink></li>
                  <li className='text-white mx-4'><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
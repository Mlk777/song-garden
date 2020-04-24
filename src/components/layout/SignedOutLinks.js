import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = ({ isVisible }) => {
  return (
    <ul
      className={`w-full flex flex-col items-center md:flex-row lg:mr-4 md:w-auto ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <li className='lg:mr-2'>
        <NavLink
          to='/signin'
          className='inline-block text-xl px-12 py-2 font-semibold text-teal-400 hover:text-teal-500 mt-4 md:mt-0'
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/signup'
          className='inline-block text-lg px-12 py-2 text-lg leading-none bg-teal-300 border rounded text-white border-white hover:border-transparent hover:text-teal-800 hover:bg-teal-200 mt-4 md:mt-0 font-bold'
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut, profile: { initials }, isVisible }) => {
  return (
    <ul
      className={`w-full flex flex-col items-center md:flex-row lg:mr-4 md:w-auto ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <li className='md:mr-6'>
        <NavLink
          to='/'
          className='inline-block text-xl font-semibold text-teal-400 hover:text-teal-500 mt-4 md:mt-0'
        >
          Songs
        </NavLink>
      </li>
      <li className='md:mr-6'>
        <NavLink
          to='/genre'
          className='inline-block text-xl font-semibold text-teal-400 hover:text-teal-500 mt-4 md:mt-0'
        >
          Genre
        </NavLink>
      </li>
      <li className='md:mr-10' onClick={signOut}>
        <NavLink
          to=''
          className='inline-block text-xl font-extrabold text-teal-900 hover:text-red-600 mt-4 md:mt-0'
        >
          Log Out
        </NavLink>
      </li>
      <li className='hidden md:flex items-center justify-center h-10 w-10 text-xl uppercase p-6 border-2 tracking-widest border-teal-200 rounded-full font-bold text-indigo-300 hover:text-indigo-500 mt-4 md:mt-0'>
        {initials}
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);

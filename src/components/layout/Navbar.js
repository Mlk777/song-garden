import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import green from '../../assets/img/green.png';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = ({ auth, profile }) => {
  const [isVisible, setIsVisible] = useState(true);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} isVisible={isVisible} />
  ) : (
    <SignedOutLinks isVisible={isVisible} />
  );

  const toggle = e => {
    setIsVisible(!isVisible);
  };
  return (
    <nav className='flex flex-col justify-center md:flex-row items-center md:justify-between flex-wrap border-b-4 border-green-100 p-4 md:mb-8'>
      <img
        src={green}
        alt='plant growing in hand'
        className='md:h-20 md:w-20 h-32 w-32 -m-4 opacity-25'
      />
      <Link
        to='/'
        className='ml-2 mb-4 md:mb-0 md:mr-auto font-semibold text-3xl text-teal-600 tracking-tight'
      >
        Song Garden
      </Link>
      <div className='block md:hidden'>
        <button
          className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
          onClick={toggle}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      {links}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);

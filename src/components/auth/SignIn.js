import React, { useState, useEffect } from 'react';
import Alert from '../layout/Alert';
import { useInputChange } from '../../customHooks/useInputChange';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const SignIn = ({ signIn, authError, auth }) => {
  const [input, handleInputChange] = useInputChange();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    signIn(input);
  };

  if (auth.uid) return <Redirect to='/' />;
  return (
    <div className='w-full flex flex-col md:mt-8 p-12'>
      <CSSTransition
        in={fadeIn}
        timeout={500}
        classNames='fade-in lg:w-1/3 bg-white shadow-md rounded border border-teal-100 pr-12 pl-6 pt-8 pb-10 mx-auto '
        unmountOnExit
        appear
      >
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 mx-4'
              htmlFor='username'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold leading-tight focus:outline-none focus:border-teal-300 mx-4'
              type='email'
              name='email'
              placeholder='johndoe@gmail.com'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2 mx-4'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm font-semibold mb-3 leading-tight focus:outline-none focus:border-teal-300 mx-4'
              type='password'
              name='password'
              placeholder='*********'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-teal-400 hover:bg-teal-500 text-white font-black py-2 px-4 rounded focus:outline-none mx-4'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </form>
      </CSSTransition>
      {authError && <Alert error={authError} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

import React from 'react';
import { useInputChange } from '../../customHooks/useInputChange';
import { connect } from 'react-redux';
import { addGenre } from '../../store/actions/genreActions';
import { Redirect } from 'react-router-dom';

const AddGenre = ({ addGenre, auth, history }) => {
  const [input, handleInputChange] = useInputChange();

  const handleSubmit = e => {
    e.preventDefault();
    addGenre(input);
    history.push('/genre');
  };

  if (!auth.uid) return <Redirect to='/signin' />;

  return (
    <div className='w-full flex justify-center mt-12'>
      <form className='w-full max-w-sm' onSubmit={handleSubmit}>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='name'
            >
              Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-400'
              name='name'
              type='text'
              placeholder='Jazz'
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='description'
            >
              Description
            </label>
          </div>
          <div className='md:w-2/3'>
            <textarea
              className='bg-gray-100 h-16 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-400'
              name='description'
              type='text'
              placeholder='The music of the soul'
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              className='shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none font-extrabold text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Add a new genre
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addGenre: genre => dispatch(addGenre(genre)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGenre);

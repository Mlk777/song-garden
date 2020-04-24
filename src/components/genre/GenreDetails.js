import React from 'react';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { useInputChange } from '../../customHooks/useInputChange';

const GenreDetails = ({ genre, auth }) => {
  const [input, handleInputChange] = useInputChange();

  if (!auth.uid) return <Redirect to='/signin' />;
  if (genre) {
    return (
      <div className='w-full flex justify-center mt-12'>
        <form className='w-full max-w-sm'>
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
                className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-500'
                name='name'
                type='text'
                placeholder={genre.name}
                onChange={handleInputChange}
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
                className='bg-gray-100 h-16 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-500'
                name='description'
                type='text'
                placeholder={genre.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label
                className='block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4'
                htmlFor='postedBy'
              >
                Posted By
              </label>
            </div>
            <div className='md:w-2/3'>
              <input
                className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-500'
                name='postedBy'
                type='text'
                disabled
                placeholder={`${genre.authorFirstName} ${genre.authorLastName}`}
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
                Modify this genre
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const genre = state.firestore.data.genre;
  const genreUnit = genre ? genre[id] : null;
  return {
    genre: genreUnit,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'genre',
    },
  ])
)(GenreDetails);

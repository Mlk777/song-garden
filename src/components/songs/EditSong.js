import React, { useState } from 'react';
import { useInputChange } from '../../customHooks/useInputChange';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const EditSong = ({ song, auth, genre }) => {
  const [input, handleInputChange] = useInputChange();
  //eslint-disable-next-line
  const [value, setValue] = useState('Choose the genre');

  if (!auth.uid) return <Redirect to='/signin' />;

  return (
    <div className='w-full flex justify-center mt-12'>
      {/* onSubmit={handleSubmit} */}
      <form className='w-full max-w-sm'>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='artist'
            >
              Artist
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-400'
              name='artist'
              type='text'
              placeholder={song.artist}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='title'
            >
              Title
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-400'
              name='title'
              type='text'
              placeholder={song.title}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='feelings'
            >
              Feelings
            </label>
          </div>
          <div className='md:w-2/3'>
            <textarea
              className='bg-gray-100 h-32 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-400'
              name='feelings'
              type='text'
              placeholder={song.feelings}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='link'
            >
              Link
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-400'
              name='link'
              type='text'
              placeholder={song.link}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='genre'
            >
              Genre:
            </label>
          </div>
          <div className='inline-block relative md:w-2/3'>
            <select
              // className='browser-default'
              className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-teal-300 placeholder-gray-400'
              name='genre'
              defaultValue={value}
              onChange={handleInputChange}
            >
              <option value={value} disabled>
                {value}
              </option>
              {genre &&
                genre.map(genre => {
                  return (
                    <option value={input.value} key={genre.id}>
                      {genre.name}
                    </option>
                  );
                })}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              className='shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none font-extrabold text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Edit this song!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const songs = state.firestore.data.songs;
  const song = songs ? songs[id] : null;
  return {
    song,
    auth: state.firebase.auth,
    genre: state.firestore.ordered.genre,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'songs' }, { collection: 'genre' }])
)(EditSong);

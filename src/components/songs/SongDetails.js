import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const SongDetails = ({ song, auth, match }) => {
  const { id } = match.params;
  //eslint-disable-next-line
  const [youtubeId, setYoutubeId] = useState(
    song && song.link.includes('youtube')
      ? `${song.link.match(/([A-Z])\w+/g).toString()}`
      : ''
  );

  if (!auth.uid) return <Redirect to='/signin' />;

  if (song) {
    return (
      <div className='w-full md:w-9/12 lg:w-6/12 mx-auto mt-16'>
        <div className='shadow-md rounded-md px-4 py-2'>
          {youtubeId !== '' ? (
            <>
              <iframe
                className='w-full h-64 rounded-sm'
                title={song.title}
                src={`https://www.youtube.com/embed/${youtubeId}`}
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
              <a href={song.link} target='_blank' rel='noopener noreferrer'>
                <span className='text-lg font-semibold text-green-800 hover:text-gray-800 text-center'>
                  {song.artist} - {song.title}
                </span>
              </a>
            </>
          ) : (
            <a href={song.link} target='_blank' rel='noopener noreferrer'>
              <span className='text-3xl font-semibold text-green-800 hover:text-gray-800 text-center'>
                {song.artist} - {song.title}
              </span>
            </a>
          )}

          <p className='text-sm text-gray-700'>Genre: {song.genre}</p>
          <p className='p-4 text-lg text-gray-600 italic font-serif'>
            "{song.feelings}"
          </p>
          <div className='flex flex-col-reverse items-center md:flex-row md:justify-between'>
            <NavLink to={`/songs/${id}/edit-song`}>
              <button className='px-4 py-2 bg-green-200 m-2 rounded-sm outline-none'>
                <i className='fas fa-edit fa-sm'></i> Modify this song
              </button>
            </NavLink>
            <div className='flex flex-col p-2 text-center'>
              <p className='w-full text-gray-800 text-sm self-end'>
                Posted by{' '}
                <span className='text-gray-500 capitalize'>{`${song.authorFirstName} ${song.authorLastName}`}</span>
              </p>
              <p className='w-full text-xs self-end'>
                Added {moment(song.createdAt.toDate()).calendar()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const songs = state.firestore.data.songs;
  const song = songs ? songs[id] : null;
  return {
    song,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'songs' }])
)(SongDetails);

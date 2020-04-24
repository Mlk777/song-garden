import React from 'react';
import { NavLink } from 'react-router-dom';
import Notifications from './Notifications';
import SongList from '../songs/SongList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ songs, auth, notifications }) => {
  if (!auth.uid) return <Redirect to='/signin' />;
  return (
    <>
      <div className='flex'>
        <SongList songs={songs} />
        <Notifications
          notifications={notifications}
          className='border-2 border-gray-400 p-2'
        />
      </div>
      <button className='absolute md:bottom-0 right-0 px-4 py-2 bg-teal-400 m-2 rounded-sm outline-none focus:outline-none'>
        <NavLink to='/songs/add-song'>
          <span className='text-2xl font-semibold'>+</span> ADD A NEW SONG
        </NavLink>
      </button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    songs: state.firestore.ordered.songs,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'songs',
      orderBy: ['createdAt', 'desc'],
    },
    {
      collection: 'notifications',
      limit: 3,
      orderBy: ['time', 'desc'],
    },
  ])
)(Dashboard);

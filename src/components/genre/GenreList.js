import React from 'react';
import { Link } from 'react-router-dom';
import GenreSummary from './GenreSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const GenreList = ({ genre, auth }) => {
  if (!auth.uid) return <Redirect to='/signin' />;
  return (
    <div>
      <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4 p-8'>
        {genre &&
          genre.map(genre => {
            return (
              <Link to={`/genre/${genre.id}`} key={genre.id} className='flex'>
                <GenreSummary genre={genre} />
              </Link>
            );
          })}
      </div>
      <button className='absolute lg:bottom-0 right-0 px-4 py-2 bg-teal-400 m-2 rounded-sm outline-none focus:outline-none'>
        <Link to='/genre/add-genre'>
          <span className='text-2xl font-semibold'>+</span> ADD A NEW GENRE
        </Link>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    genre: state.firestore.ordered.genre,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'genre',
      orderBy: ['createdAt', 'desc'],
    },
  ])
)(GenreList);

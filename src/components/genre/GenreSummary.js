import React from 'react';
import moment from 'moment';

const GenreSummary = ({ genre }) => {
  return (
    <>
      <div className='w-full flex flex-col border border-green-100 rounded-md shadow-md p-4'>
        <span className='text-xl text-teal-700'>{genre.name}</span>
        <p className='p-4 text-gray-500 italic'>
          {genre.description === ''
            ? 'No description'
            : `"${genre.description}"`}
        </p>
        <div className='mt-auto'>
          <p className='text-gray-800 text-xs'>
            Posted by{' '}
            <span className='text-gray-600'>{`${genre.authorFirstName} ${genre.authorLastName}`}</span>
          </p>
          <p className='text-xs text-gray-500'>
            Added {moment(genre.createdAt.toDate()).calendar()}
          </p>
        </div>
      </div>
    </>
  );
};

export default GenreSummary;

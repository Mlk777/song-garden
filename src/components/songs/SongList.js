import React from 'react';
import SongSummary from './SongSummary';
import { Link } from 'react-router-dom';

const SongList = ({ songs }) => {
  return (
    <div className='w-full lg:w-9/12 grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
      {songs &&
        songs.map(song => {
          return (
            <Link to={`/song/${song.id}`} key={song.id} className='w-full'>
              <SongSummary song={song} />
            </Link>
          );
        })}
    </div>
  );
};

export default SongList;

import React, { useState, useEffect } from 'react';
import musicLogo from '../../assets/img/music.png';
import moment from 'moment';

const SongSummary = ({ song }) => {
  const [img, setImg] = useState('');
  //eslint-disable-next-line
  const [youtubeLink, setYoutubeLink] = useState(
    song.link.includes('youtube')
      ? `${song.link.match(/([A-Z])\w+/g).toString()}`
      : ''
  );

  useEffect(() => {
    if (song.link.includes('youtube')) {
      setImg(`https://img.youtube.com/vi/${youtubeLink}/mqdefault.jpg`);
    } else {
      setImg(`${musicLogo}`);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className='relative border border-gray-100 rounded overflow-hidden shadow-md m-2'>
      <div
        className='flex items-center justify-center absolute w-full h-full bg-no-repeat bg-center bg-cover'
        style={{
          backgroundImage: youtubeLink !== '' ? `url(${img})` : '',
          opacity: '0.15',
        }}
      >
        <img
          className={youtubeLink === '' ? 'h-16 w-16' : ''}
          src={img}
          alt='Either thumbnail from youtube or music logo when not found'
        />
      </div>
      <div className='flex flex-col p-2 z-10 items-center'>
        <div className='text-lg font-extrabold text-gray-900 capitalize text-center p-2'>
          {song.title}
        </div>
        <p className='text-gray-800 text-sm'>
          Posted by{' '}
          <span className='text-gray-600 capitalize'>{`${song.authorFirstName} ${song.authorLastName}`}</span>
        </p>
        <p className='text-xs'>
          Added {moment(song.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default SongSummary;

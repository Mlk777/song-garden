import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import NotFound from '../../assets/img/404.jpg';

const NoMatch = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 2500);
  }, []);

  if (redirect) return <Redirect to='/' />;
  return (
    <div className='flex flex-col items-center mt-10 p-2'>
      <p className='text-2xl md:text-5xl'>What are you doing here?</p>
      <img src={NotFound} alt='meme for 404 page' />
    </div>
  );
};

export default NoMatch;

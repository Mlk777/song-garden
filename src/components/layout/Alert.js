import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const Alert = ({ error }) => {
  //eslint-disable-next-line
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  console.log(error);
  useEffect(() => {
    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
      setFadeOut(true);
    }, 3000);
  }, []);

  return (
    <CSSTransition
      in={fadeIn}
      timeout={500}
      classNames={
        fadeIn
          ? 'fade-in lg:w-1/3 bg-white shadow-md px-4 py-2 font-bold text-lg bg-red-300 text-red-600 border border-red-500 rounded mx-auto my-4 text-center '
          : 'fade-out lg:w-1/3 bg-white shadow-md px-4 py-2 font-bold text-lg bg-red-300 text-red-600 border border-red-500 rounded mx-auto my-4 text-center '
      }
      unmountOnExit
      appear
    >
      <p>{error}</p>
    </CSSTransition>
  );
};

export default Alert;

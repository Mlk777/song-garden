import React from 'react';
import moment from 'moment';

const Notifications = ({ notifications }) => {
  return (
    <div className='hidden lg:block md:flex-1 border-l border-teal-200 '>
      <div className='w-full text-xl text-center text-teal-800 font-bold font-mono'>
        Notifications
      </div>
      <ul className='flex flex-col items-center'>
        {notifications &&
          notifications.map(notification => {
            return (
              <li key={notification.id} className='p-2'>
                <span className='text-sm capitalize text-blue-800'>
                  {notification.user}
                </span>
                <span className='text-sm'> {notification.content}</span>
                <div className='text-xs text-gray-500'>
                  {moment(notification.time.toDate()).fromNow()}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Notifications;

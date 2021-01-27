import React from 'react';
import spinner from './loading-spinner.svg';

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', padding: '30px 0' }}>
      <img src={spinner} alt='loading spinner' />
    </div>
  );
};

export default Loading;

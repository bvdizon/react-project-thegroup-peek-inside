import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
      <h3>Ooops! Looks like we hit a snag.</h3>
      <p style={{ margin: '40px' }}>
        Please click the button below to go back to our homepage.
      </p>
      <Link to='/' className='btn'>
        Check our listings
      </Link>
    </div>
  );
};

export default Error;

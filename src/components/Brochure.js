import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BroContext } from '../context/context-brochures';

const Brochure = () => {
  const { brochures } = useContext(BroContext);

  const { address } = useParams();

  const broSingle =
    brochures && brochures.find((bro) => bro.gsx$alias.$t === address);

  return (
    <div
      className='brochure-container'
      style={{ width: '100%', height: '100vh' }}>
      {broSingle && (
        <iframe
          src={broSingle.gsx$url.$t}
          frameborder='0'
          style={{ width: '100%', height: '100%' }}></iframe>
      )}
    </div>
  );
};

export default Brochure;

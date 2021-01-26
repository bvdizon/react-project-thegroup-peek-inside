import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BroContext } from '../context/context-brochures';

const BroList = () => {
  const { brochures } = useContext(BroContext);

  return (
    <div>
      {brochures &&
        brochures.map((bro) => {
          console.log(bro.gsx$active.$t);

          if (bro.gsx$active.$t === 'Yes') {
            return (
              <div key={bro.gsx$property.$t} className='brochure-item'>
                <h3>{bro.gsx$property.$t}</h3>
                <Link to={`/view/${bro.gsx$alias.$t}`} className='btn'>
                  {' '}
                  View Brochure
                </Link>
              </div>
            );
          }
        })}
    </div>
  );
};

export default BroList;

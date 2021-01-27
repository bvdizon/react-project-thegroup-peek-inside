import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BroContext } from '../context/context-brochures';
import Loading from './Loading';

const BroList = () => {
  const { brochures, isLoading } = useContext(BroContext);

  return (
    <div>
      {isLoading && <Loading />}
      {brochures &&
        brochures.map((bro) => {
          return (
            bro.gsx$active.$t === 'Yes' && (
              <div key={bro.gsx$property.$t} className='brochure-item'>
                <h3>{bro.gsx$property.$t}</h3>
                <Link to={`/view/${bro.gsx$alias.$t}`} className='btn'>
                  View Brochure
                </Link>
              </div>
            )
          );
        })}
    </div>
  );
};

export default BroList;

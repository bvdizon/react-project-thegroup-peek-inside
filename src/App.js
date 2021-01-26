import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Brochure from './components/Brochure';
import BroList from './components/BroList';
import Error from './components/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <h2 style={{ textAlign: 'center' }}>
              The Group at RE/MAX First - Listings
            </h2>
            <div className='underline'></div>
            <BroList />
          </div>
        </Route>
        <Route exact path='/view/:address'>
          <Brochure />
        </Route>
        <Route path='*'>
          <div className='container'>
            <Error />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

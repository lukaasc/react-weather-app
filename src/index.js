import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import StoreInitializer from './stores';

import Nav from './components/nav-bar/nav-bar';
import HomeContainer from './components/home-container/home-container';
import ForecastContainer from './components/forecast-container/forecast-container';

ReactDOM.render(
  <>
    <Provider {...StoreInitializer.initialize()}>
      <BrowserRouter>
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/forecast" component={ForecastContainer} />
          </Switch>
        </>
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);

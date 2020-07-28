import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Page404 from './pages/Page404';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>        
        <Route exact path="/" component={Home} />
        <Route path="/cadastro/video" component={Home} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  )

}

export default Routes;

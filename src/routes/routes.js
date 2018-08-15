import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../components/home/Home';
import ReviewAndConfirm from '../components/reviewandconfirm/ReviewAndConfirm';
import TravelInsurance from '../components/travelinsurance/TravelInsurance';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/reviewAndConfirm" exact component={ReviewAndConfirm}/>
      <Route path="/travelInsurance" exact component={TravelInsurance}/>
    </Switch>
  </BrowserRouter>
)

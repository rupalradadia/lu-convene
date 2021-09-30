import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';

const Routes = () => (
  <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/reset/:token" component={ResetPassword} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
    </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
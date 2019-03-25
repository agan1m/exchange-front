import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import auth from 'utils/auth';
import AppSettings from '../../../appSettings';

/* eslint react/prop-types:0 */
const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.getToken() !== null ? (
        <Redirect
          to={{
            pathname: AppSettings.successLoginRedirectUrl,
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default AuthRoute;

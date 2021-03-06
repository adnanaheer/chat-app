// import react.
import React from 'react';
// import react router.
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }: any) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      localStorage.getItem('auth') ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;
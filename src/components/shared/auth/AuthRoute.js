import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function AuthRoute({component: Component, auth, ...rest}){
  return (
    <Route
      {...rest}
      render={(props) => !auth.isAuth
        ? <Component {...props} {...rest}/>
        : <Redirect to={{pathname: '/'}} />}
    />
    )
}

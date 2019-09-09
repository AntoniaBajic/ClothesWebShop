import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "services/authentication/auth.js";

const PrivateRoute = ({ render: Component, redirect, ...rest }) => {
  if (!isLoggedIn()) {
    redirect && navigate(redirect);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

import UseFirebase from "../hooks/UseFirebase";

const Login = () => {
  const location = useLocation();
  const history = useNavigate();
  const redirect_url = location.state?.from;
  console.log(redirect_url);
  const { signInUsingGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history(redirect_url);
    });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login Using Google</button>
    </div>
  );
};

export default Login;

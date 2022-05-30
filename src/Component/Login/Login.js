import React from "react";
import signInUsingGoogle from "../hooks/UseFirebase";
const Login = () => {
  return (
    <div>
      <button onClick={signInUsingGoogle}>Login</button>
    </div>
  );
};

export default Login;

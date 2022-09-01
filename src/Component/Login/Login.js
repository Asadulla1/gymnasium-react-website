import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { Form, Button } from "react-bootstrap";
import useFirebase from "../hooks/UseFirebase";
import { Link } from "react-router-dom";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { signInUsingGoogle, auth, isLoading, setLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useNavigate();
  const redirect_url = location.state?.from;
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history(redirect_url);
      })
      .finally(() => setLoading(false));
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log("Login Successful");
        history(redirect_url);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password must be greater than 6 characters");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password must contains 2 uppercase letter");
      return;
    }
    processLogin(email, password);
  };

  return (
    <div className="mx-5 my-5">
      <form onSubmit={handleRegistration}>
        <h1 className="text-primary my-5">Please Login</h1>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <fieldset className="row mb-3">
          <div className="col-sm-10"></div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2"></div>
          <div className="row mb-3 text-danger">{error}</div>
        </div>
        <div className="my-3 text-center">
          <h4 className="text-color">
            New User? <Link to="/registration">Please Register</Link>
          </h4>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-3 ">
            Login
          </button>
        </div>
      </form>
      <div className="my-3 text-center text-color">
        <h1>OR</h1>
      </div>
      <div className="text-center my-3">
        <button className="btn btn-primary" onClick={handleGoogleSignIn}>
          Login Using Google
        </button>
      </div>
    </div>
  );
};

export default Login;

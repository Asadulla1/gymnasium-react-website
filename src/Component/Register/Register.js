import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        console.log(user);
        setUserName();
        history("/home");
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
    createNewUser(email, password);
  };
  return (
    <div className="mx-5 my-5">
      <h1 className="text-center text-color">Register Form Page</h1>
      <form onSubmit={handleRegistration}>
        <h1 className="text-primary my-5">Please Register</h1>
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label ">
            Name
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleName}
              type="name"
              className="form-control"
              id="inputName"
              required
            />
          </div>
        </div>

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
        <button type="submit" className="btn btn-primary my-3">
          Register
        </button>
      </form>
      <h4 className="text-center text-color">Thank you for registration</h4>
    </div>
  );
};

export default Register;

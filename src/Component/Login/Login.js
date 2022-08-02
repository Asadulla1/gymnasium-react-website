import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { Form, Button } from "react-bootstrap";
import useFirebase from "../hooks/UseFirebase";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const {
    handleBlur,
    handleSubmit,
    user,
    newUser,
    setNewUser,
    signInWithEmailAndPassword,
    setUser,
  } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  const redirect_url = location.state?.from;
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history(redirect_url);
    });
  };

  return (
    <div className="text-center mb-3">
      <div>
        <input
          type="checkbox"
          name="newUser"
          onChange={() => setNewUser(!newUser)}
          id=""
        />
        <label htmlFor="newUser">New User Sign Up</label>
        <form action="" onSubmit={handleSubmit}>
          {newUser && (
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              placeholder="Write your Name"
            />
          )}{" "}
          <br />
          <input
            type="text"
            name="email"
            placeholder="Write your Email Address"
            required
            onBlur={handleBlur}
          />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Write your Password"
            onBlur={handleBlur}
          />{" "}
          <br />
          <input type="submit" value="Submit" />
          <br />
          <p style={{ color: "red" }}>{user.error}</p>
          {user.success && (
            <p style={{ color: "green" }}>
              User {newUser ? "Created" : "Logged In"} Successfully{" "}
            </p>
          )}
        </form>
      </div>
      <h1 className="mb-3" style={{ color: "goldenrod" }}>
        OR
      </h1>
      <button className="btn btn-primary" onClick={handleGoogleSignIn}>
        Login Using Google
      </button>
    </div>
  );
};

export default Login;

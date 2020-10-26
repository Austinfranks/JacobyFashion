import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Styles = styled.div`
  @media only screen and (max-width: 400px) {
  }
`;

export default function Login() {
  // Create state to grab inputs in order to validate input
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("")

  // Function that sends info to backend which is than inserted into a database
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {

      // will show wrong user has been input
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        //array of data just grabs and displays username
        setLoginStatus(response.data[0].username)

      }
      console.log(response.data);
    });
  };

  return (
    <Styles>
      <div className="">
        <div className="registration">
          <h1>Registration</h1>
          <label>UserName</label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button onClick={register}>Register</button>
        </div>

        <div className="login">
          <h1>Login</h1>
          <label>UserName</label>
          <input             type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }} />
          <label>Password</label>
          <input             type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
          <button onClick={login}>Login</button>
        </div>

          <h1>{loginStatus}</h1>
      </div>
    </Styles>
  );
}

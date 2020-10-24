import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const Styles = styled.div`
  @media only screen and (max-width: 400px) {
  }
`;

export default function Login() {
  // Create state to grab inputs in order to validate input
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  // Function that sends info to backend which is than inserted into a database
  const register = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
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
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <button>Login</button>
        </div>
      </div>
    </Styles>
  );
}

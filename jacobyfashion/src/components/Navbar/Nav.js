import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const Styles = styled.div`
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    min-width: 250px;
  }

  .logo {
    text-decoration: none;
    color: black;
    font-size: 24px;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  .navlinks {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-decoration: none;
    color: black;
    font-size: 18px;
    text-align:center;
    text-transform: uppercase;


  }
  @media only screen and (max-width: 700px) {
    nav {
      display: flex;
      flex-direction: column;
    }
    .logo {
    font-size: 18px;
  }
    .navlinks {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      text-decoration: none;
      color: black;
      font-size: 16px;

    }
  }

`;

const Nav = () => (
  <Styles>
    <nav>
      <Link to="/" className="logo">
        <h3 className="logo">Jacoby Fashion</h3>
      </Link>

      <div className="navlinks">
        <Link to="/mens" className="navlinks">
          <h5>Men</h5>
        </Link>
        <Link to="/womens" className="navlinks">
          <h5>Women</h5>
        </Link>
        <Link to="/cart" className="navlinks">
          <h5>Cart</h5>
        </Link>
        <Link to="/login" className="navlinks">
          <h5>Login / Sign up</h5>
        </Link>
      </div>
    </nav>
  </Styles>
);

export default Nav;

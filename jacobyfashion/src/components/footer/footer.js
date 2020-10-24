import React from "react";

import styled from "styled-components";


const Styles = styled.div`

.footer {
  position:fixed;
  bottom:0;
width: 100%;
height: 10vh;
display:flex;
align-items:center;
font-size: 16px;
background-color:lightgrey;
justify-content:center;
}

`;

const Footer = () => (
  <Styles>
    <div className="footer">JACOBY FASHION LLC</div>
  </Styles>
);

export default Footer;

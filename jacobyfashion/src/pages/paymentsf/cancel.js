import React from "react";

import styled from "styled-components";

const Styles = styled.div`
  @media only screen and (max-width: 400px) {
  }
`;

const Cancel = () => (
  <Styles>
    <div>Cancelled payment</div>
  </Styles>
);

export default Cancel;

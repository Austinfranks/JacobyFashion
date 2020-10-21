import React from "react";

import styled from "styled-components";

const Styles = styled.div`
  @media only screen and (max-width: 400px) {
  }
`;

const Success = () => (
  <Styles>
    <div>Successful payment</div>
  </Styles>
);

export default Success;

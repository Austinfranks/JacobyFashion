import React, { useContext } from "react";
import { CartContext } from "../components/cart/context";
import lineItems from "../data/womenproducts";

import styled from "styled-components";

const Styles = styled.div`
  .mainbox2 {
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .subbox2 {

    text-align:center;

  }
  .subbox2 div {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  .name {
    font-size: 16px;
  }

  button {
    border-radius: 5px;
    background: lightgrey;
    padding: 5px 12px;
    color: black;
    border: none;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  button:hover {
    background-color: blueviolet;
    color: white;

  }

  @media (max-width: 600px) {
    .name {
      font-size: 1.5em;
    }
  }

  @media (max-width: 400px) {
    audio {
      width: 100px;
    }
    .name {
      font-size: 1.5em;
    }
  }
  @media only screen and (max-width: 400px) {
  }
`;

export default function Womens() {
  const cartCtx = useContext(CartContext);

  return (
    <Styles>
      <div className="mainbox2">
        {lineItems.map((lineItem) => (
          <div className="subbox2">
            <div>
              <img
                src={`/images/${lineItem.price}.png`}
                alt={lineItem.name}
                height={300}
              />
            </div>

            <div className="name">{lineItem.name}</div>

            <button onClick={() => cartCtx.addToCart(lineItem)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </Styles>
  );
}

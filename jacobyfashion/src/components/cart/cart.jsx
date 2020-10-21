import React, { useState, useEffect, useContext } from "react";

import styled from "styled-components";

import { CartContext } from "../cart/context";

const Styles = styled.div`
  button {
    border-radius: 5px;
    background-color: grey;
    color: white;
    border: none;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  button:hover {
    background-color: black;
    color: white;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .mainbox2 {
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
    font-size: 2em;
    transition: 1s ease;
  }

  .header {
    font-weight: bold;
  }

  .body {
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
    justify-content: space-evenly;
  }

  .row {
    display: flex;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 400px) {
  }
`;
// Changes numbers to usd
function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}

// Displays total price
function totalPrice(lineItems) {
  return lineItems.reduce((acc, lineItem) => acc + lineItem.price, 0.0);
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  // Sends order to Stripe
  function checkout() {
    stripe.redirectToCheckout({
      lineItems: ctx.lineItems.map((lineItem) => ({
        quantity: lineItem.quantity,
        price: lineItem.price,
      })),
      mode: "payment",

      //COMEBACK TO LATER ON AND MAKE A SUCCESS PAGE AND A CANCEL PAGE
      successUrl:
        "https://www.youtube.com/channel/UCIqjyQTCGJ67GRxarEuRJIA?/success",
      cancelUrl:
        "https://www.youtube.com/channel/UCIqjyQTCGJ67GRxarEuRJIA?/canceled",
    });
  }
  return (
    <Styles>
      <section className="mainbox2">
        <div className="row header">
          <h1>Cart</h1>
        </div>
        <div className="body">
          {ctx.lineItems.map((lineItem) => (
            <div className="row">
              <div>
                {" "}
                <img
                  src={`/images/${lineItem.price}.png`}
                  alt={lineItem.name}
                  width={75}
                  height={75}
                />
              </div>
              <div>{lineItem.name}</div>
              <div>x{lineItem.quantity}</div>
              <div>{formatPrice(lineItem.amount)}</div>
            </div>
          ))}

          <div className="row">
            <div>Total:</div>

            <div>{formatPrice(totalPrice(ctx.lineItems))}</div>
            <div>
              <button onClick={checkout}>Check Out</button>
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
}

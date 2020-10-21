import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  //Empty initialized array setItems will change it to items in it
  const [lineItems, setItems] = useState([]);

  function addToCart(lineItem) {
    setItems((prevState) => [...prevState, lineItem]);
  }

  function lineItemsWithQuantities(lineItems) {
    return lineItems.reduce((acc, lineItem) => {
      const found = acc.find((_lineItem) => _lineItem.price === lineItem.price);
      if (found) {
        found.quantity = found.quantity + 1;
      } else {
        acc.push({
          quantity: 1,
          ...lineItem,
        });
      }
      return acc;
    }, []);
  }

  return (
    <CartContext.Provider
      value={{ lineItems: lineItemsWithQuantities(lineItems), addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

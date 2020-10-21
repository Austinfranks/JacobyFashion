import React from "react";
import Cart from "../components/cart/cart";

import styled from "styled-components";

const Styles = styled.div``;

export default function ViewCartPage() {
  return (
    <Styles>
      <Cart stripeToken="pk_test_51HZ2F8Kt8nVMRF3bgyznlvYbdaauzNhEb1748B1ZZmW02zxyqTQNvmBJUzKcDr1LvhFVDShwJc3ZqXbTAkMMdA7M004hXoSrVh" />
    </Styles>
  );
}

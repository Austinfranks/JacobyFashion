import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Home from "./pages/homepagee";
import Mens from "./pages/Menspage";
import Womens from "./pages/Womenpage";
import Login from "./pages/LoginPage";
import Footer from "./components/footer/footer"

import Cart from "./pages/viewcart";
import CartProvider from "./components/cart/context";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mens" component={Mens} />
            <Route path="/womens" component={Womens} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer/>
        </CartProvider>
      </div>
    </Router>
  );
};

export default App;

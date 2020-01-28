import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarComponet from "./components/NavbarComponet";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <NavbarComponet />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

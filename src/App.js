import React from 'react';
import { Route, Switch } from "react-router-dom";

import NavbarComponet from "./components/NavbarComponet";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div>
      <NavbarComponet />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={LoginPage} />

      </Switch>
    </div>
  );
}

import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";

function App(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isVerifying = useSelector((state) => state.auth.isVerifying);
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;

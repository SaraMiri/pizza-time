import React from "react";
import { Router } from "@reach/router";
import StorePicker from "./StorePicker";
import App from "./App";
import Pizza from "./Pizza";
import NotFound from "./NotFound";

const Routes = () => (
  <Router>
    <StorePicker path="/" />
    <App path="/store/:storeId" />
    <Pizza path="/secret-dinner" />
    {/* TODO: Hook up the new Pizza component to render @ "/secret-dinner" */}
    {/* HINT: You need to write code 👇 and also 👆 */}

    <NotFound default />
  </Router>
);

export default Routes;

import React from "react";
import ReactDom from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//import "../assets/scss/material-kit-react.scss?v=1.10.0";

//import CssBaseline from '@material-ui/core/CssBaseline';
//import HomeLayout from '../components/layout/home-layout/HomeLayout';

import Components from "../views/Components/Components.js";

var hist = createBrowserHistory();

const HomePage = () => {
  return (
    <Router history={hist}>
    <Switch>
      <Route path="/" component={Components} />
    </Switch>
  </Router>
  )
};

ReactDom.render(<HomePage />, document.getElementById('root'));

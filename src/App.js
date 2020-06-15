import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import HorizontalLinearStepper from "./app/pages/Register";
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="content">
            <Route path="/register/store" component={HorizontalLinearStepper}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;
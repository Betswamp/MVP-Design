import React, { Component, Fragment } from "react";
import Web from "./routes/Web";
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Web />
      </Fragment>
    );
  }
}
export default App;

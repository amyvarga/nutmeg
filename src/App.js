import React, { Component } from "react";
import FeeCharges from "./container/feeCharges/FeeCharges";
import GlobalStyle from "./globalStyles/globalStyle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <FeeCharges />
      </div>
    );
  }
}

export default App;
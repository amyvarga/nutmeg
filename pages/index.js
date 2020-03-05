import React, { Component } from "react";
import FeeCharges from "../src/container/feeCharges/FeeCharges";
import FeeChargesForm from "../src/container/feeCharges/feeChargesform";
import GlobalStyle from "../src/globalStyles/globalStyle";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <noscript><div className="noscript">You need to enable JavaScript to run this app.</div></noscript>
        <FeeCharges maxMonths="36" currency="£"
          render={props => <FeeChargesForm {...props} />}
        />
      </div >
    );
  }
}

export default Index;

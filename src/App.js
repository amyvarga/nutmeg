import React, { Component } from "react";
import { ThemeProvider } from 'styled-components';
import FeeCharges from "./container/feeCharges/FeeCharges";
import FeeChargesForm from "./container/feeCharges/FeeChargesForm";
import GlobalStyle from "./globalStyles/globalStyle";
import variables from './globalStyles/variables';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <ThemeProvider theme={variables}>
          <FeeCharges maxMonths="36" currency="£"
            render={props => <FeeChargesForm {...props} />}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import { ThemeProvider } from 'styled-components';
import FeeCharges from "./container/feeCharges/FeeCharges";
import GlobalStyle from "./globalStyles/globalStyle";
import variables from './globalStyles/variables';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <ThemeProvider theme={variables}>
          <FeeCharges />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
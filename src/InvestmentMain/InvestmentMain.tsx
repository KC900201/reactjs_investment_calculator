import * as React from 'react';
import InvestmentForm from '../InvestmentForm/InvestmentForm';

import logo from '../assets/investment-calculator-logo.png';

function InvestmentMain() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      {/* Insert form here */}
      <InvestmentForm />

      {/* Insert investment table */}
    </div>
  );
}

export default InvestmentMain

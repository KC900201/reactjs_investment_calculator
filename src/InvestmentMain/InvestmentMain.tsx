import * as React from 'react';
import InvestmentForm from '../InvestmentForm/InvestmentForm';
import InvestmentTable from '../InvestmentTable/InvestmentTable';

import logo from '../assets/investment-calculator-logo.png';

function InvestmentMain() {
  return (
    <div>
      <header className='header'>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      {/* Insert form here */}
      <InvestmentForm />

      {/* Insert investment table */}
      <InvestmentTable />
    </div>
  );
}

export default InvestmentMain;

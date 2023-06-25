import * as React from 'react';

function InvestmentForm() {
  const calculateHandler = (userInput: any) => {
    const yearlyData = []

    let currentSavings = +userInput['current-savings']
    const yearlyContribution = +userInput['yearly-contribution']
    const expectedReturn = +userInput['expected-return'] / 100
    const duration = +userInput['duration']

    // Calculates yearly results
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // Do something with yearlyData
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input type="number" id="expected-return" />
        </p>
        <p>
        <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className='actions'>
        <button type='reset' className='buttonAlt'>Reset</button>
        <button type='submit' className='button'>Calculate</button>
      </p>
    </form>
  )
}

export default InvestmentForm

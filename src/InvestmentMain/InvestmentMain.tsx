import * as React from 'react';
import Header from '../Header/Header';
import InvestmentForm from '../InvestmentForm/InvestmentForm';
import InvestmentTable from '../InvestmentTable/InvestmentTable';
import type {
  InvestmentDataInput,
  InvestmentDataType,
} from '../enums/investmentEnum';

function InvestmentMain() {
  const [userInput, setUserInput] = React.useState<InvestmentDataInput | null>(
    null
  );

  const yearlyData: InvestmentDataType[] = [
    {
      year: 0,
      yearlyInterest: 0,
      savingsEndOfYear: 0,
      yearlyContribution: 0,
    },
  ];

  const calculateHandler = (userInput: InvestmentDataInput) => {
    setUserInput(userInput);
  };

  // to calculate yearlyData when userInput is updated
  if (userInput) {
    let currentSavings = +(userInput?.currentSavings ?? 0);
    const yearlyContribution = +(userInput?.yearlyContribution ?? 0);
    const expectedReturn = +(userInput?.expectedReturn ?? 0) / 100;
    const duration = +(userInput?.duration ?? 0);

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
  }

  return (
    <>
      <Header />

      {/* Insert form here */}
      <InvestmentForm onCalculateHandler={calculateHandler} />

      {/* Insert investment table */}
      {!userInput ? (
        <p>No Investment calculations yet</p>
      ) : (
        <InvestmentTable
          investmentYearlyData={yearlyData}
          initialInvestment={userInput?.currentSavings}
        />
      )}
    </>
  );
}

export default InvestmentMain;

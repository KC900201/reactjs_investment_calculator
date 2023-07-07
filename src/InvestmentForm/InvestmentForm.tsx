import * as React from 'react';

type investmentDataType = {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
};

type InvestmentDataInput = {
  currentSavings?: number;
  yearlyContribution?: number;
  expectedReturn?: number;
  duration?: number;
};

function InvestmentForm() {
  const initialUserInput: InvestmentDataInput = {
    currentSavings: undefined,
    yearlyContribution: undefined,
    expectedReturn: undefined,
    duration: undefined,
  };

  const [userInput, setUserInput] =
    React.useState<InvestmentDataInput>(initialUserInput);

  // handle input events
  const onHandleInputChange = (inputType: string, value: string) => {
    setUserInput((previousState: InvestmentDataInput) => {
      return {
        ...previousState,
        [inputType]: parseInt(value),
      };
    });
  };

  const calculateHandler = (userInput: any) => {
    const yearlyData: investmentDataType[] = [];

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

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

    // Continue calculation with yearlyData (07/03/2023)
    // May have to move to InvestmentMain.tsx
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onReset = () => {
    setUserInput(initialUserInput);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            pattern="^[0-9]*$"
            value={userInput.currentSavings}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onHandleInputChange('currentSavings', event?.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            pattern="^[0-9]*$"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onHandleInputChange('yearlyContribution', event?.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            pattern="^[0-9]*$"
            value={userInput.expectedReturn}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onHandleInputChange('expectedReturn', event?.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            pattern="^[0-9]*$"
            value={userInput.duration}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onHandleInputChange('duration', event?.target.value)
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={onReset}>
          Reset
        </button>
        <button type="submit" className="button" onClick={calculateHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentForm;

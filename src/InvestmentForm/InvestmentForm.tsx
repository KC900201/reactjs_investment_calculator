import * as React from 'react';
import type {
  InvestmentDataType,
  InvestmentDataInput,
} from '../enums/investmentEnum';

function InvestmentForm(props: {
  onCalculateHandler: (userInput: InvestmentDataInput) => void;
}) {
  const { onCalculateHandler } = props;

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
        <button
          type="submit"
          className="button"
          onClick={() => onCalculateHandler(userInput)}
        >
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentForm;

import * as React from 'react';
import { InvestmentDataType } from '../enums/investmentEnum';

function InvestmentTable(props: {
  investmentYearlyData: InvestmentDataType[] | null;
  initialInvestment?: number;
}) {
  const { investmentYearlyData, initialInvestment } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const userEarlyInitialInvestment = React.useMemo(
    () => initialInvestment ?? 0,
    [initialInvestment]
  );

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentYearlyData &&
          investmentYearlyData.length > 0 &&
          investmentYearlyData?.map((i: InvestmentDataType) => (
            <tr key={`row_${i.year}`}>
              <td>{i.year}</td>
              <td>{formatter.format(i.savingsEndOfYear ?? 0)}</td>
              <td>{formatter.format(i.yearlyInterest ?? 0)}</td>
              <td>
                {formatter.format(
                  (i.savingsEndOfYear ?? 0) -
                    userEarlyInitialInvestment -
                    (i.yearlyContribution ?? 0) * (i.year ?? 0)
                )}
              </td>
              <td>
                {formatter.format(
                  userEarlyInitialInvestment +
                    (i.yearlyContribution ?? 0) * (i.year ?? 0)
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default InvestmentTable;

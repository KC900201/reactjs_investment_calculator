export type InvestmentDataType = {
  year?: number;
  yearlyInterest?: number;
  savingsEndOfYear?: number;
  yearlyContribution?: number;
};

export type InvestmentDataInput = {
  currentSavings?: number;
  yearlyContribution?: number;
  expectedReturn?: number;
  duration?: number;
};

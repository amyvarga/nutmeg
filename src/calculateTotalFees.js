const calculateTotalFees = (
  startingContribution,
  monthlyContribution,
  months
) => {
  startingContribution = Number(startingContribution);
  monthlyContribution = Number(monthlyContribution);
  months = Number(months);
  const feeCharge = 0.0625 / 100;
  let accunulatedWealth = startingContribution;
  let totalFee = 0;
  let monthlyFee = 0;
  let i = 1;
  while (i < months) {
    i++;
    accunulatedWealth = accunulatedWealth + monthlyContribution - monthlyFee;
    monthlyFee = (accunulatedWealth * feeCharge).toFixed(14);
    totalFee = (parseFloat(totalFee) + parseFloat(monthlyFee)).toFixed(14);
  }
  return parseFloat(totalFee);
};

export default calculateTotalFees;

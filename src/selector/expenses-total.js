const totalExpenses = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => {
      return sum + value;
    }, 0);
};

export default totalExpenses;
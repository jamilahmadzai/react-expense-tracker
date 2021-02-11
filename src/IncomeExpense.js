import React from "react";
import { useGlobalContext } from "./context";

function IncomeExpense() {
  const { transactions } = useGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const incomeTotal = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expenseTotal =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus" id="money-plus">
            +${incomeTotal}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus" id="money-minus">
            -${Math.abs(expenseTotal)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;

import React from "react";
import { useGlobalContext } from "./context";

function IncomeExpense() {
  const { transactions } = useGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const incomeTotal = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => {
      return amount > 0 ? (acc += amount) : null;
    }, 0);
  const expenseTotal = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => {
      return amount < 0 ? (acc += amount) : null;
    }, 0);
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus" id="money-plus">
            +${incomeTotal.toFixed(2)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus" id="money-minus">
            -${Math.abs(expenseTotal).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;

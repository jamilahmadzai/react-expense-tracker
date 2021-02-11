import React from "react";

function IncomeExpense() {
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus" id="money-plus">
            +$0.00
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus" id="money-minus">
            -$0.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;

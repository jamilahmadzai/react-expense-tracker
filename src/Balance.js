import React from "react";
import { useGlobalContext } from "./context";

function Balance() {
  const { transactions } = useGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, amount) => (acc += amount), 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {total < 0 ? "-" : null}${Math.abs(total).toFixed(2)}
      </h1>
    </div>
  );
}

export default Balance;

import React from "react";
import { useGlobalContext } from "./context";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useGlobalContext();

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

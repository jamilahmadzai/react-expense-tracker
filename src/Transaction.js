import React from "react";
import { useGlobalContext } from "./context";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useGlobalContext();

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount).toFixed(2)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;

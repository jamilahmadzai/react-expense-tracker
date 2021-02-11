import React, { useState } from "react";
import { useGlobalContext } from "./context";

const AddNewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction, clearTransaction } = useGlobalContext();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: parseInt(amount),
      id: Date.now(),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  const clearAll = (e) => {
    e.preventDefault();
    clearTransaction();
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">
            <strong>Transaction</strong>
          </label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Enter text..."
            onChange={handleText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <strong>Amount</strong> <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <button
          className="btn add-btn"
          onClick={onSubmit}
          disabled={!text || amount === 0 ? true : false}
        >
          Add transaction
        </button>
        <button className="btn clear-btn" onClick={clearAll}>
          Clear transactions
        </button>
      </form>
    </div>
  );
};

export default AddNewTransaction;

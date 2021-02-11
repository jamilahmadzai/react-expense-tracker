import React, { useState } from "react";
import { useGlobalContext } from "./context";

const AddNewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useGlobalContext();

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
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
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
            Amount <br />
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
        <button className="btn" onClick={onSubmit}>
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddNewTransaction;

import React from "react";
import "./Transaction.css";

const Transaction = ({
  description,
  amount,
  type,
  date,
  id,
  deleteTransaction,
}) => {
  return (
    <li className={`Transaction ${type}`}>
      <span className="DeleteTransaction" onClick={() => deleteTransaction(id)}>
        X
      </span>
      <p>Description: {description}</p>
      <span className="TransactionAmount">Amount: ${amount}</span>
      <small>Date: {date} </small>
    </li>
  );
};

export { Transaction };

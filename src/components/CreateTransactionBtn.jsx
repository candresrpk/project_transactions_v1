import React from "react";
import "./CreateTransaction.css";

const CreateTransactionBtn = () => {
  const createTransaction = (e) => {
    alert("create transaction");
  };

  return (
    <button className="createButton" onClick={() => createTransaction()}>
      Add
    </button>
  );
};

export { CreateTransactionBtn };

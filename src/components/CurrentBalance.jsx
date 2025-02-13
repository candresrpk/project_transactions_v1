import React from "react";

const CurrentBalance = ({ balance, total_transactions }) => {
  return (
    <div>
      <p>Current Balance: $ {balance}</p>
      <p>Total Transactions: {total_transactions}</p>
    </div>
  );
};

export { CurrentBalance };

import React from "react";
import "./TransactionList.css";

const TransactionList = ({ children }) => {
  return <ul className="TransactionsList">{children}</ul>;
};

export { TransactionList };

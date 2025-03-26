import "./App.css";
import { CreateTransactionBtn } from "./components/CreateTransactionBtn";
import { CurrentBalance } from "./components/CurrentBalance";
import { Search } from "./components/Search";
import { Transaction } from "./components/Transaction";
import { TransactionList } from "./components/TransactionList";
import React, { useState } from "react";

function App() {
  const defaultTransactions = [
    {
      id: 1,
      description: "Apple",
      amount: 100.24,
      type: "expense",
      date: "2025-01-02",
    },
    {
      id: 2,
      description: "Food",
      amount: 300.04,
      type: "expense",
      date: "2025-01-04",
    },
    {
      id: 3,
      description: "Payrroll",
      amount: 500.0,
      type: "income",
      date: "2025-01-15",
    },
  ];

  const [transactions, setTransactions] = useState(defaultTransactions);
  const [search, setSearch] = useState("");

  const balance = transactions.reduce((acc, transaction) => {
    if (transaction.type === "expense") {
      return acc - transaction.amount;
    }
    return acc + transaction.amount;
  }, 0.0);

  const total_transactions = transactions.length;

  const SearchTransaction = (e) => {
    setSearch(e.target.value);

    if (e.target.value === "") {
      setTransactions(defaultTransactions);
    } else {
      setTransactions(
        transactions.filter((transaction) =>
          transaction.description.toLowerCase().includes(e.target.value)
        )
      );
    }
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      <CurrentBalance
        balance={balance.toFixed(2)}
        total_transactions={total_transactions}
      />
      <Search search={search} SearchTransaction={SearchTransaction} />
      <TransactionList>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            description={transaction.description}
            amount={transaction.amount}
            type={transaction.type}
            date={transaction.date}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </TransactionList>

      <CreateTransactionBtn />
    </>
  );
}

export default App;

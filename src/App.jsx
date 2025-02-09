import './App.css'
import {CreateTransactionBtn} from './components/CreateTransactionBtn'
import {CurrentBalance} from './components/CurrentBalance'
import {Search} from './components/Search'
import {Transaction} from './components/Transaction'
import {TransactionList} from './components/TransactionList'
import React, {useState} from'react'

function App() {

  const defaultTransactions = [
    {
      id: 1,
      description: 'Apple',
      amount: 10.24,
      type: 'expense',
      date: '2025-01-02'
    },
    {
      id: 2,
      description: 'Food',
      amount: 30.04,
      type: 'expense',
      date: '2025-01-04'
    },
    {
      id: 3,
      description: 'Payrroll',
      amount: 500.00,
      type: 'Income',
      date: '2025-01-15'
    },

  ]


  const [transactions, setTransactions] = useState(defaultTransactions);


  

  return (
    <>
      <CurrentBalance  balance={100} spents={2222} total_transactions={123123} />
      <Search/>
      <TransactionList>
        {
          transactions.map(transaction => (
            <Transaction
             key={transaction.id}
             description={transaction.description} 
             amount={transaction.amount} 
             type={transaction.type} 
             date={transaction.date} />
          ))
        }
      </TransactionList>

      <CreateTransactionBtn/>
    </>
  )
}

export default App

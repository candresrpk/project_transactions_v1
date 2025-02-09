import React from 'react'

const CurrentBalance = ({balance, total_transactions, spents}) => {
  return (
    <div>
        <p>Current Balance: $ {balance}</p>
        <p>Total Transactions: {total_transactions}</p>
        <p>Total Amount Spent: $ {spents}</p>
    </div>
  )
}

export  {CurrentBalance}
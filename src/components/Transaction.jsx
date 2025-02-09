import React from 'react'

const Transaction = ({description, amount, type, date}) => {
  return (
    <li>
      <span className='DeleteTransaction'>X</span>
      <p>Description: {description}</p>
      <span className='TransactionAmount'>Amount: ${amount}</span>
      <small>Date: {date} </small>

    </li>
  )
}

export  {Transaction}
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ExpenseDetails = ({expenseKey , setExpenseKey,expense}) => {
  const [expenseData , setExpenseData] = useState([]);
  console.log(expenseKey , 'in expense Details');
  useEffect(() => {
  
    axios.get('http://localhost:4000/getProduct')
    .then(res => {
        console.log(res.data[0], 'getData');
        setExpenseData(res.data[0]);
        setExpenseKey(false);
    })
    .catch(err => {
        console.log(err);
    })

  },[expenseKey]);
  
    return (
    <ul> Expenses 
      {expenseData.map(item => {
       return <li >{item.expenseName + "  "}{item.expensePrice + "  "}{item.expenseDate} <button onClick={() => {
  
        axios.delete(`http://localhost:4000/deleteProduct/${item.id}`)
    .then(res => {
        console.log(res.data[0], 'getData');
        setExpenseKey(true);
    })
    .catch(err => {
        console.log(err);
    })


        }}> Delete </button>
         <button onClick={() => {
          axios.patch(`http://localhost:4000/editProduct/${item.id}`,expense)
          .then(res => {
            console.log(res);
            setExpenseKey(true);
          })
          .catch(err => {
            console.log(err);
          })
         }}> Edit </button>


        </li>
      })}
    </ul>
  )
}

export default ExpenseDetails

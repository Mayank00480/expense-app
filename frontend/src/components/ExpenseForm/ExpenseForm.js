import React, { useState } from 'react';
import axios from 'axios'
const ExpenseForm = ({expenseKey , setExpenseKey , expenseData , setExpenseData}) => {
    console.log(expenseKey , 'in expense form');
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation here
    console.log(expenseData);
    // Reset form fields after submission
    axios.post('http://localhost:4000/addExpense',{
        data : expenseData,
        // headers : {
        //     'Content-Type' : 'application/json'
        // }
    })
    .then(data => {

        console.log(data);
        setExpenseKey(true);
        setExpenseData({
            title: '',
            amount: '',
            date: ''
          });
    })

    .catch(err => {
        console.log(err);
    })
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input 
          type="text" 
          name="title" 
          value={expenseData.title} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Amount</label>
        <input 
          type="number" 
          name="amount" 
          value={expenseData.amount} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Date</label>
        <input 
          type="date" 
          name="date" 
          value={expenseData.date} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

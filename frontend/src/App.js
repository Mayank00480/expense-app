
import { useState } from 'react';
import './App.css';
import ExpenseDetails from './components/ExpenseDetails/ExpenseDetails';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

function App() {
  const [expenseKey , setExpenseKey] = useState(false);
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: ''
  });
  return (
    <div className="App">
     <ExpenseForm expenseKey = {expenseKey} setExpenseKey = {setExpenseKey} expenseData = {expenseData} setExpenseData = {setExpenseData}/>
     <ExpenseDetails expenseKey = {expenseKey} setExpenseKey = {setExpenseKey} expense = {expenseData} setExpenseData = {setExpenseData}/>
    </div>
  );
}

export default App;

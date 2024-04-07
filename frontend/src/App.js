
import { useState } from 'react';
import './App.css';
import ExpenseDetails from './components/ExpenseDetails/ExpenseDetails';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

function App() {
  const [expenseKey , setExpenseKey] = useState(false);
  return (
    <div className="App">
     <ExpenseForm expenseKey = {expenseKey} setExpenseKey = {setExpenseKey}/>
     <ExpenseDetails expenseKey = {expenseKey} setExpenseKey = {setExpenseKey}/>
    </div>
  );
}

export default App;

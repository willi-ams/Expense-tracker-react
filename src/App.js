import { useState } from 'react';

import Expenses from "./components/Expenses/Expenses"; // custom made components
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  // an array containing objects
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);  // this is an array

  const addExpenseHandler = expense => {

    setExpenses(prevExpenses => {  // updating state based on the previous state
      return [expense, ...prevExpenses]  // returns a new array
    });

    // console.log('In app Js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />  
      <Expenses items={expenses} />
    </div>
  );

};



export default App; 



// the props attribute name is up to you, dosent have to start with 'on', like i used in the newExpense props
// expense by default is an array containing 4 objects.. before we start to add
// setExpenses([expense, ...prevExpenses]); 




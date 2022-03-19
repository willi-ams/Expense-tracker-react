import { useState } from 'react';  // imported a react hook

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);  // saves it to the state
    };

    const filteredExpenses = props.items.filter(cur => {  // used an array method
        return cur.date.getFullYear().toString() === filteredYear;  // filteredYear = 2020
    });

    console.log(filteredExpenses);


    return (
      // dont forget this is a jsx code, to write javascript in it we have to use the {} to execute jaavascript expressions

      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
        
      </Card>
    );
    
};



export default Expenses;




//---------- NOTE ON ADDING AN EXPENSE ITEM -------//
// We want to render one ExpenseItem per element in the array (props value)

// we return the jsx element where we want to map the current expense


// filteredExpenses: loops through the filteredExpenses array {gets the current element (an object)} and return the jsx element where we want to map the current expense
// loops through the expenses array and returns the current obj which year is = to filteredYear

// 1st way
// {filteredExpenses.length === 0 ? (
//   <p>No expenses found.</p>
// ) : (
//   filteredExpenses.map((curExp) => (
//     <ExpenseItem
//       key={curExp.id} // always add the key when mapping out list of items
//       title={curExp.title}
//       amount={curExp.amount}
//       date={curExp.date}
//     />
//   ))
// )}

// 2nd way
// {filteredExpenses.length === 0 && <p>No expenses found.</p>}

// {filteredExpenses.length > 0 &&
//   filteredExpenses.map((curExp) => (
//     <ExpenseItem
//       key={curExp.id} // always add the key when mapping out list of items
//       title={curExp.title}
//       amount={curExp.amount}
//       date={curExp.date}
//     />
//   ))
// }


// // 3nd way
// // this is written outside the jsx code
// let expenseContent = <p>No expense found</p>;

// if (filteredExpenses.length > 0) {
//   expensesContent = filteredExpenses.map((curExp) => (
//     <ExpenseItem
//         key={curExp.id} // always add the key when mapping out list of items
//         title={curExp.title}
//         amount={curExp.amount}
//         date={curExp.date}
//     />
// ))
// }

// // this is writen in the jsx code (dynamic expression)
// {expensesContent}
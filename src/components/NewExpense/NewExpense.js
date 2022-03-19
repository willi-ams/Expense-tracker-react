import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredEpenseData) => {

    const expenseData = {
      ...enteredEpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);

    setIsEditing(false);
  }; 

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }


  return (
    <div className="new-expense">
      
      {!isEditing && (  // false
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (  // true
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      
    </div>
  );
};

export default NewExpense;


// NOTE
// add a prop(onSaveExpenseData) to the ExpenseForm. ie.. it can be named anything.

// passed the SaveExpenseDataHandler function into the expenseForm component as props (onSaveExpenseData)
// Executed the SaveExpenseDataHandler function in the ExpenseForm component
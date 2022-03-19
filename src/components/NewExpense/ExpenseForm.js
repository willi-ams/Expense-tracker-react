import { useState } from "react"; // imported a react hook
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({  // updating multiple state
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);  // stored the event value in a state

        // setUserInput({  // safe way of updating state if you're not depending on the previous state
        //     ...userInput,  // used the spread operator to copy last inputed value
        //     enteredTitle: event.target.value  // then overite enteredTitle
        // });

        // setUserInput((prevState) => {  // safer way of updating state depending on the previous state
        //     return {   // returns d new object with d changed state
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,  // used the spread operator to copy last inputed value
        //     enteredAmount: event.target.value  // then overite enteredAmount
        // });
    };

    const dateChangeHandler = (event)  => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,  // used the spread operator to copy last inputed value
        //     enteredDate: event.target.value  // then overite enteredDate
        // });
    };

    const submitHandler = (event) => {  
        event.preventDefault();   // prevents page from reloading

        const expenseData =  {  // extracts data from the states into thsi object
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);  // passes the data to the newExpense component
        setEnteredTitle('');  // clears all data in the states
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        // onSubmit for a submit event
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} /> 
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;


// here were are not using the useState to update the component (though the component will update)
// were doing it to store the event value in a variable outside the component (so thatno matter how often this component function executes, the state is stored and survives)
// we also need the state for updating and re-renderingthe component later anyways

//NOTE
// By default whenever you listen to the change event as in input, when you read the value of the input using typeof operator, IT RETURNS A STRING

// whenever you update state and you depend on the previous state we should pass in a function into the state function 
// in many cases both will work fine
// why we should use d passed in function method is that react dosnt update state instantly 
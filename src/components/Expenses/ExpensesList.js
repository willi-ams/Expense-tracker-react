import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => { 
    
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">

            {props.expenses.map((curExp) => (
                <ExpenseItem
                    key={curExp.id} // always add the key when mapping out list of items
                    title={curExp.title}
                    amount={curExp.amount}
                    date={curExp.date}
                />
            ))}

        </ul>
    );
    
};


export default ExpensesList;

// here we're returning any of the two jsx code based on the length of the array in the props
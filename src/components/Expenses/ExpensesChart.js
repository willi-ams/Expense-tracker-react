import Chart from "../Chart/Chart";


const ExpensesChart = (props) => {   // filtered expenses as props
    const chartDataPoints = [ 
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },  // 1094.16
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },  // 450
        { label: 'jul', value: 0 },
        { label: 'Aug', value: 0 },  // 94.12
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (const curExp of props.expenses) {
        const expenseMonth = curExp.date.getMonth();  // starting at 0 => january = 0
        console.log(expenseMonth);

        chartDataPoints[expenseMonth].value += curExp.amount;

    };


    return <Chart dataPoints={chartDataPoints} />;
};


export default ExpensesChart;
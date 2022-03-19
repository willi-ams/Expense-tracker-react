import './ChartBar.css';


const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {  // we could have 0 if we fitered for a month with no expenses
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';  // turns to string
        // console.log(props.value);
        // console.log(props.maxValue);
    }

    // console.log(barFillHeight);

    // SETING THE STYLE OF AN ELEMENT DYNAMICALLY:  style={{'backgroundColor': 'red', backgroundColor: 'red'}}
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};


export default ChartBar;



// the height information is missing in the "chart-bar__fill" class, how much we
// we fill this bar with d height depends on the data we're receiving

// barFillHeight: gives the percentage by which the bar should be filled
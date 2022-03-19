import ChartBar from './ChartBar';
import './Chart.css';


const Chart = props => {
  const dataPointValues = props.dataPoints.map(cur => cur.value);
  console.log(dataPointValues);
  const totalMaximum = Math.max(...dataPointValues);  
  // console.log(totalMaximum);

    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
};

export default Chart;





// return the jsx code where we have all these Chatbars
// map every single datapoints props into a chatBar component so that we create  
// many chatBar component as we have datapoints
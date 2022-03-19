import './Card.css';

const Card = (props) => {

    const classes = 'card ' + props.className;
    const cond = props.children;
    // console.log(cond);

    return (
        <div className={classes}>{props.children}</div>
    )

}

export default Card;
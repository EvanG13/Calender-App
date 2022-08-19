import Day from './Day';

const Month = (props) => {
    var days = [];
    for (let day = 1; day <= props.numDays; ++day) {
        days.push(day); 
    }
    
    return (
        <div className="Month">
            <h2>{props.name}</h2>
            {days.map((d,key) => {
                return <Day dayNum={d} key={d}/>;
            })}
        </div>
    );
}

export default Month;
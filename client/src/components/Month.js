import Day from './Day';


const Month = (props) => {
    var days = [];
    for (let j = 0; j < 5; ++j) {
        let currWeek = [];
        for (let i = 1; i <= 7; ++i) {
            let dayValue = i + ( 7 * j); //calculate the day value
            if (dayValue > props.numDays) {
                dayValue -= props.numDays;
            }
            currWeek.push(dayValue); 
        }
        days.push(currWeek);
    }
   
    //TODO: refactor the return statement into a nested map function
    return (
        <div className="month">
            <h2>{props.name}</h2>
            <div className='week'>
                {days[0].map((d,key) => {
                    return <Day dayNum={d} key={d} year = {props.year} month = {props.month}/>;
                })}
            </div>

            <div className='week'>
                {days[1].map((d) => {
                    return <Day dayNum={d} key={d} year = {props.year} month = {props.month}/>;
                })}
            </div>

            <div className='week'>
                {days[2].map((d) => {
                    return <Day dayNum={d} key={d} year = {props.year} month = {props.month}/>;
                })}
            </div>

            <div className='week'>
                {days[3].map((d) => {
                    return <Day dayNum={d} key={d} year = {props.year} month = {props.month}/>;
                })}
            </div>

            <div className='week'>
                {days[4].map((d) => {
                    return <Day dayNum={d} key={d} year = {props.year} month = {props.month}/>;
                })}
            </div>
        </div>
    );
}

export default Month;
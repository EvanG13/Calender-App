import Day from './Day';


const Month = (props) => {
    var days = [];
   
    for (let j = 0; j < 5; ++j) {
        let currWeek = [];
        for (let i = 1; i <= 7; ++i) {
            let dayValue = i + ( 7 * j); //calculate the day value
            if (dayValue > props.numDays) {
              //  dayValue -= props.numDays;
                //currWeek.push([dayValue, props.month+1]); 
            }
            else{
                currWeek.push([dayValue, props.month]); 
            }
        }
        days.push(currWeek);
    }
   
    //TODO: refactor the return statement into a nested map function
    return (
        <div className="month">
            <h2>{props.name}</h2>
                
            {days.map((week,key) => {
                return (
                    <div className='week'>
                        {week.map(d => <Day dayNum={d[0]} key={d[0]} year = {props.year} month = {d[1]}/>)}
                    </div>
                    );
                })}
        </div>
    );
}

export default Month;
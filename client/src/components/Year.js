import Month from "./Month";

const Year = (props) => {

function leapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

let febNumDays = (leapYear(props.yearNum)) ? 29 : 28;
    return (
        <div className="Year">
            <h2>{props.year}</h2>
            <Month year={props.yearNum} month={1} name="January" numDays={31} />
            <Month year={props.yearNum} month={2} name="February" numDays={febNumDays}/>
            <Month year={props.yearNum} month={3} name="March" numDays={31}/>
            <Month year={props.yearNum} month={4} name="April" numDays={30}/>
            <Month year={props.yearNum} month={5} name="May" numDays={31}/>
            <Month year={props.yearNum} month={6} name="June" numDays={30}/>
            <Month year={props.yearNum} month={7} name="July" numDays={31}/>
            <Month year={props.yearNum} month={8} name="August" numDays={31}/>
            <Month year={props.yearNum} month={9} name="September" numDays={30}/>
            <Month year={props.yearNum} month={10} name="October" numDays={31}/>
            <Month year={props.yearNum} month={11} name="November" numDays={30}/>
            <Month year={props.yearNum} month={12} name="December" numDays={31}/>
        </div> 
    );
}

export default Year;
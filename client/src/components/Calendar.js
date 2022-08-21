import Year from "./Year";
import Header from "./Header";

const Calendar = (props) =>{
    return (
        <div className='calendar'>
            <Header yearNum = {props.yearNum} backYear = {props.backYear} forwardYear = {props.forwardYear}/>
            <Year yearNum = {props.yearNum} />
        </div>
    );
}

export default Calendar;
import Year from "./Year";
import Header from "./Header";

const Calendar = (props) => {
    return (
        <div className='calendar'>
            <Header yearNum = {props.yearNum}/>
            <Year yearNum = {props.yearNum} />
        </div>
    );
}

export default Calendar;
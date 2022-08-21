

const DayEvent = (props) => {
    return (
        <div className='day-event'>
            <p className='day-event-title'>
                {props.eventTitle}
            </p>
            <button className='delete-day-event'
            onClick={props.handleClick}>
                X
            </button>
        </div>
        
    )
}

export default DayEvent;
import {React, useState} from 'react';
import DayEvent from './DayEvent';  
import MoreIcon from './MoreIcon';
import { dateIsPassed, isCurrentDate, getDayOfWeek } from '../helperFunctions/dateFunctions';

const Day = (props) => {
    
    let [eventList, setEventList] = useState([]);
    let bgcolor;
    let dayOfWeek = getDayOfWeek({year: props.year, month: props.month, day: props.dayNum});
    const createEvent = () => { //creates a dayEvent object and updates the state to hold it.
        let eventName = prompt("Input the name of the event you wish to create"); //wait for user to name event and store it to eventName
        let eventToBeAdded = {title: eventName, key: eventList.length}; //give each DayEvent object a key based on the length of the current list
        setEventList([...eventList, eventToBeAdded]); //add the new event to the state array
    }

    const deleteEvent = (e, key) => { //deletes a dayevent object from the state array
        let newEventList = eventList.filter(element => element.key!==key); //filter out of eventList the event to be deleted by key
        setEventList(newEventList);   //reset the state of the Day component to echo the changes to the event list
    }

    return (
        <div className="day-container" backgroundColor = {bgcolor}>
            <p className='day-num'> {props.dayNum}    {dayOfWeek}</p> 
            {eventList.map(
                (element, index) => {
                if(index < 2){
                    return <DayEvent handleClick = {() => {deleteEvent(element, element.key)}} eventTitle = {element.title} key={element.key}/>;
                }
                return null;
                })}

            <MoreIcon visible={eventList.length > 2 ? true : false }/>
            <button className='create-event-button' onClick={createEvent}>Create Event</button>
        </div>
    );
}

export default Day;
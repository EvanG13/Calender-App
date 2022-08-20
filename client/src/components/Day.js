import {React, useState} from 'react';
import DayEvent from './DayEvent';  

const Day = (props) => {
    let [eventList, setEventList] = useState([]);
    const createEvent = () =>{
        var eventName = prompt("Input the name of the event you wish to create"); //wait for user to name event and then add it to the state
        var eventToBeAdded = {title: eventName, key: eventList.length};
        setEventList([...eventList, eventToBeAdded]); //add it to the state
    }

    const deleteEvent = (e, key) =>{
      
        console.log(key);
        let newEventList = eventList.filter(element => element.key!==key);
        setEventList(newEventList);
    }

    return (
        <div className="day-container">
            <p> {props.dayNum}</p>
            {eventList.map(
                (element, index) => <DayEvent handleClick = {() => {deleteEvent(element, element.key)}} eventTitle = {element.title} key={element.key}/>)}
            <button onClick={createEvent}>Create Event</button>
        </div>
    );
}

export default Day;
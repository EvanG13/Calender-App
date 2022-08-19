import Month from "./Month";

const Year = (props) => {
    /* TODO Implement having multiple years */
    // Currently : Year = 2022
    return (
        <div className="Year">
            <h2>{props.year}</h2>
            <Month name="January" numDays={31}/>
            <Month name="February" numDays={28}/>
            <Month name="March" numDays={31}/>
            <Month name="April" numDays={30}/>
            <Month name="May" numDays={31}/>
            <Month name="June" numDays={30}/>
            <Month name="July" numDays={31}/>
            <Month name="August" numDays={31}/>
            <Month name="September" numDays={30}/>
            <Month name="October" numDays={31}/>
            <Month name="November" numDays={30}/>
            <Month name="December" numDays={31}/>
        </div> 
    );
}

export default Year;
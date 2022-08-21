//helper functions that deal with the js Date object. They all take a date object {year: , month: , day: , } 

export const dateIsPassed = (date) =>{ //takes date object compares it with the current date returns false if the obj is bigger than the current date
    const currentDate = new Date();
    const dateObj = new Date(date.year, date.month, date.day);
    return ((currentDate.getTime() - dateObj.getTime()) > 0)
}

export const isCurrentDate = (date) =>{ //checks if the date obj arg is the current date
    const currentDate = new Date();
    const dateObj = new Date(date.year, date.month, date.day);
    return currentDate === dateObj;
}

export const getDayOfWeek = (date) =>{ //converts the date object into a week day and returns as a string
    const dateObj = new Date(date.year, date.month, date.day);
    console.log(date.year, date.month, date.day);
    let dayOfWeek;
    switch(dateObj.getDay()){
        case 3:
            dayOfWeek = 'Sunday';
            break;
        case 4:
            dayOfWeek = 'Monday';
            break;
        case 5:
            dayOfWeek = 'Tuesday';
            break;
        case 6:
            dayOfWeek = 'Wednesday';
            break;
        case 0:
            dayOfWeek = 'Thursday';
            break; 
        case 1:
            dayOfWeek = 'Friday';
            break;
        case 2:
            dayOfWeek = 'Saturday';
            break;
        default:
            console.log("problem getting day of week.");
            console.log("recieved:" + dateObj.getDay());
    }
    return dayOfWeek;
}





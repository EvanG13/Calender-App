//helper functions that deal with the js Date object. They all take a date object {year: , month: , day: , } 

export const dateIsPassed = (date) =>{ //takes date object compares it with the current date returns false if the obj is bigger than the current date
    const currentDate = new Date();
    const dateObj = new Date(date.year, date.month, date.day);
    return (currentDate > dateObj);
}

export const isCurrentDate = (date) =>{ //checks if the date obj arg is the current date
    let currentDate = new Date();
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); 
    const dateObj = new Date(date.year, date.month, date.day);
    console.log(dateObj.getTime(), currentDate.getTime());
    return ((currentDate.getTime() === dateObj.getTime()));
}

export const getDayOfWeek = (date) =>{ //converts the date object into a week day and returns as a string
    const dateObj = new Date(date.year, date.month, date.day);
   

    let dayOfWeek;
    switch(dateObj.getDay()) {
        case 0:
            dayOfWeek = 'Sunday';
            break;
        case 1:
            dayOfWeek = 'Monday';
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            break;
        case 3:
            dayOfWeek = 'Wednesday';
            break;
        case 4:
            dayOfWeek = 'Thursday';
            break; 
        case 5:
            dayOfWeek = 'Friday';
            break;
        case 6:
            dayOfWeek = 'Saturday';
            break;
        default:
            console.log("problem getting day of week.");
            console.log("recieved:" + dateObj.getDay());
    }

    return dayOfWeek;
}

export function isLeapYear(year) { //returns true if year is a leap year
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};




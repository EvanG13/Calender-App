
const generateBgColor = (dayOfWeek, isPassed, isCurrentDate) =>{
    let bgColor = {};
    if(dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        bgColor = {backgroundColor: "#161748", color: "white"};
    }
    if(isPassed){
        bgColor = {backgroundColor: "#bc7a94" , color: "black"};
    }
    if(isCurrentDate){
        bgColor = { backgroundColor: "yellow", color: "black"};
    }

    return bgColor;
}

export default generateBgColor;
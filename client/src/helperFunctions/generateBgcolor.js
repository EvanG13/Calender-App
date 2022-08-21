
const generateBgColor = (dayOfWeek, isPassed) =>{
    let bgColor;
    if(dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        bgColor = {backgroundColor: "#161748", color: "white"};
    }
    if(isPassed){
        bgColor = {backgroundColor: "gray", color: "black"};
    }
    return bgColor;
}

export default generateBgColor;
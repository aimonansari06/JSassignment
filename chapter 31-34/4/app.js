var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if(nameOfToday=="Sat" || nameOfToday=="Sun")
{
    document.write("Today is FUN DAY!!!")
}
else{
    document.write("Its Not FUN DAY")
}


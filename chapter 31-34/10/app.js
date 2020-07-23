var dat1 = new Date("Dec 5, 2015 22:50:16");
var dat2= new Date();
var temp1= dat2.getTime()- dat1.getTime()
var temp2= temp1/(60000)
document.write(Math.round(temp2)+" seconds have passed since Dec 15 2015 22:50:16")

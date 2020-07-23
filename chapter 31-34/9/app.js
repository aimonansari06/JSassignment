var dat1 = new Date("Jun 18, 2015");
var dat2= new Date();
var temp1= dat2.getTime()- dat1.getTime()
var temp2= temp1/(1000*60*60*24)
document.write(Math.floor(temp2)+" days have passed since june 18 2015 ramadan")

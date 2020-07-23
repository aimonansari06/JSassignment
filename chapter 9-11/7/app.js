var num=Number(prompt("Enter any num from 1-10: "));
var secretnum=5;
if(num==secretnum)
{
    document.write("Bingo!!!");
}
else if((num+1)==secretnum)
{
    document.write("Close enough to the correct answer")
}
else{
    document.write("Neither secret Number nor close enough ");
}



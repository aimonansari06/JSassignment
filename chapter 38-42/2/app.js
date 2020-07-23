var a=Number(prompt("enter year: "));
var res=leap(a)
function leap(x)
{
    var i=0;
	if((a % 4 && a % 100 && a % 400)==0)
		i=1;
	else
		i=0;
	return i;
}
if(res==1)
	document.write("year is leap year ");
else
	document.write("year is not a leap year ");


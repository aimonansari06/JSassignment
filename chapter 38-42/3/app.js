

var a=Number(prompt("length of side a: "));
var b=Number(prompt("length of side b: "));
var c=Number(prompt("length of side c: "));



function findS(x,y,z)
{
	var res=(x+y+z)/2;
	return res
}
var s=findS(a,b,c)

function findA(q,x,y,z)
{
	var ans=q*(q-x)*(q-y)*(q-z);
	return ans;
}
var area= findA(s,a,b,c)
document.write("Area of Triangle is: ", area)



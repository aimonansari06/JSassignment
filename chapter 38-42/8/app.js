var distance=Number(prompt("Enter a distance in Kilo Meters"))
var m= meter(distance)
var ft=feets(distance)
var inc=inches(distance)
var cm=centimeters(distance)
document.write("Meters: "+m)
document.write("<br/>Feets: "+ft)
document.write("<br/>Inches: "+inc)
document.write("<br/>Centimeters: "+cm)
function meter(dst)
{
	res=dst*1000
	return res
}
function feets(dst)
{
	res=dst*3281
	return res
}
function inches(dst)
{
	res=dst*39370
	return res
}
function centimeters(dst)
{
	res=dst*100000
	return res
}




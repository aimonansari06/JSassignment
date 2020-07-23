document.write("<h3>The Geometrizer</h3>")

var radius=5.45
document.write("Radius= "+radius)
pi=3.14
calcCircumference(radius)
calcArea(radius)
function calcCircumference(rad)
{
   var circumference=2*pi*rad;
   document.write("<br/>Circumference= "+circumference)
}
function calcArea(rad)
{
   var area=pi*rad*rad;
   document.write("<br/>Area = "+ area)
}
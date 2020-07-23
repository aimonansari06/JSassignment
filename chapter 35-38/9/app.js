var n1=Number(prompt("Enter width of triangle: "))
var n2=Number(prompt("Enter height of triangle: "))
var callarea1= area1(n1,n2)
var callarea2= area1(2,3)
function area1(num1, num2)
{
  var result= num1*num2;
  return result;
}
document.write("Area of triangle pass in variables: "+callarea1+"<br/>")
document.write("Area of triangle pass as values: "+callarea2+" width= 2, height=3<br/>")
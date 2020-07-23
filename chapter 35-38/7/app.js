function counting()
{
  var n1=Number(prompt("Enter starting number: "))
  var n2=Number(prompt("Enter ending number: "))
  document.write("<h3> Counting </h3>")
  for(var i=n1; i<=n2; i++)
  {
    document.write(i+"<br/>")
  }
}
var callfunc=counting()

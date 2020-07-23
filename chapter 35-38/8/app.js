
function calhypontenuse()
{
  var n1=Number(prompt("Enter base value: "))
  var n2=Number(prompt("Enter perpendicular value: "))
  n1=Number(calsqr(n1))
  n2=Number(calsqr(n2))
  var add= n1+n2;
  var hyp= Math.sqrt(add)
  return hyp
  
  function calsqr(n)
  {
    return n*n;
  }
  
  
}

var callfunc=calhypontenuse()
document.write("Hypontenuse= "+callfunc)

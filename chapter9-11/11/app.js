var firstnum=Number(prompt("Enter first number: "));
var secondnum=Number(prompt("Enter second number: "));
var operation=prompt("Enter arithematic operation");

if(operation=="+")
{
    var result=firstnum+secondnum;
    document.write("Result: "+result);
}
else if(operation=="-")
{
    var result=firstnum-secondnum;
    document.write("Result: "+result);
}
else if(operation=="*")
{
    var result=firstnum*secondnum;
    document.write("Result: "+result);
}
else if(operation=="/")
{
    var result=firstnum/secondnum;
    document.write("Result: "+result);
}
else if(operation=="&")
{
    var result=firstnum&secondnum;
    document.write("Result: "+result);
}
else if(operation=="%")
{
    var result=firstnum%secondnum;
    document.write("Result: "+result);
}






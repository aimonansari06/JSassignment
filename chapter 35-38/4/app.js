var callfun=arithematic()
function arithematic()
{
    var num1=Number(prompt("Enter first num: "))
    var num2=Number(prompt("Enter second num: "))
    var opr=prompt("Enter operator: ")
    if(opr=="+")
    {
        var result=num1+num2
    document.write(result)
    }
   else if(opr=="-")
    {
        var result=num1-num2
    document.write(result)
    }
   else if(opr=="/")
    {
        var result=num1/num2
    document.write(result)
    }
    else if(opr=="*")
    {
        var result=num1*num2
    document.write(result)
    }
   else if(opr=="%")
    {
        var result=num1%num2
    document.write(result)
    }
}




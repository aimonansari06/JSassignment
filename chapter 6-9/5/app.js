var num=window.prompt("enter any number: ");
if(num ==0)
{
    for(var i=1; i<13; i++)
    {
        document.write("5 x "+ i+" = "+(5*i)+"<br/>");
    }
    
}
else
{
    for(var i=1; i<13; i++)
    {
        document.write(num+" x "+ i+" = "+(num*i)+"<br/>");
    }
}



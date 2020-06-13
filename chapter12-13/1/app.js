var temp=prompt("Enter any character: ");

if(temp.charCodeAt(0)>=65 && temp.charCodeAt(0)<=90)
{
    document.write("Upper Case letter");
}
else if(temp.charCodeAt(0)>=97 && temp.charCodeAt(0)<=122){
    document.write("Lower case letter");
}
else
{
    document.write("Its a number");
}






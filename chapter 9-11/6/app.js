var mark1=Number(prompt("Enter your marks in english: "));
var mark2=Number(prompt("Enter your marks in urdu: "));
var mark3=Number(prompt("Enter your marks in math: "));
var total=Number(prompt("Enter total marks: "));
var mobt=mark1+mark2+mark3;
var percentage=(mobt*100)/300;

document.write("<h1>Marksheet</h1> <br/>");
document.write("Total marks: "+total+ "<br/>");
document.write("Marks Obtained: "+mobt+ "<br/>");
document.write("Percentage: "+percentage+"<br/>");

if(percentage>=80)
{
    document.write("Grade: A-one <br/>");
    document.write("Remarks: Excellent <br/>");
}
else if(percentage>=70)
{
    document.write("Grade: A <br/>");
    document.write("Remarks: Good <br/>");
}
else if(percentage>=60)
{
    document.write("Grade: B <br/>");
    document.write("Remarks: You need to improve <br/>");
}
else if(percentage<60)
{
    document.write("Grade: Fail <br/>");
    document.write("Remarks: Sorry <br/>");
}



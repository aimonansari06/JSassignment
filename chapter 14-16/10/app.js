var number=[]
for(var i=0; i<4; i++)
{
    var temp=Number(prompt("Enter numbers: "));
    number[i]=temp;
    
}
document.write("Score of student: "+number+"<br/>");
number.sort();
document.write("Ordered score of students: "+number);





var temp=prompt("enter a text: ");
document.write("User Input: "+ temp);
var temp1=temp.slice(0,1);
var temp2=temp.slice(1);
document.write("<br/>After: "+temp1.toUpperCase(), temp2.toLowerCase());
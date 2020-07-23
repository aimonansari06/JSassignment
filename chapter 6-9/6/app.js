var subj1= window.prompt("Enter first subj: ");
var subj2= window.prompt("Enter second subj: ");
var subj3= window.prompt("Enter third subj: ");
var maxmarks=100;
var totalmarks=100*3;
var s1marks=Number(window.prompt("Enter marks of " + subj1));
var s2marks=Number(window.prompt("Enter marks of " + subj2));
var s3marks=Number(window.prompt("Enter marks of " + subj3));
var obtmarks=s1marks+s2marks+s3marks;
var p1= (s1marks*100)/totalmarks;
var p2= (s2marks*100)/totalmarks;
var p3= (s3marks*100)/totalmarks;
var pertotal=p1+p2+p3;
document.write("<h1> Subject --- Total Marks --- Obtained --- Percentage </h1><br/>");
document.write(subj1+"-----------------------"+maxmarks+"----------------------------"+s1marks+"--------------------------"+p1+"% <br/>");
document.write(subj2+"-----------------------"+maxmarks+"----------------------------"+s2marks+"--------------------------"+p2+"% <br/>");
document.write(subj3+"------------------------"+maxmarks+"---------------------------"+s3marks+"--------------------------"+p3+"% <br/>");
document.write("------------------------------"+totalmarks+"--------------------------------"+obtmarks+"-----------------------------"+pertotal+"% <br/>");













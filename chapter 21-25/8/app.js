var message = "Ali and Sami are best friends. They play cricket and football together.";
var newtemp= message.replace(/and/g,'&')
document.write("Before: "+message+"<br/>");
document.write("After replacing: "+newtemp);
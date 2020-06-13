var a=2, b=1 ,result;

document.write(" a is: "+a+"<br/>");
document.write(" b is: "+b+"<br/>");
result=--a;
document.write(" result is: "+result+"<br/>");
document.write( "<br/>");
document.write(" a is: "+a+"<br/>");
document.write(" b is: "+b+"<br/>");
result=--a - --b;
document.write(" result is: "+result+"<br/>");
document.write( "<br/>");
document.write(" a is: "+a+"<br/>");
document.write(" b is: "+b+"<br/>");
result=--a - --b + ++b;
document.write(" result is: "+result+"<br/>");
document.write( "<br/>");
document.write(" a is: "+a+"<br/>");
document.write(" b is: "+b+"<br/>");
result=--a - --b + ++b +b--;
document.write(" result is: "+result+"<br/>");
document.write( "<br/>");


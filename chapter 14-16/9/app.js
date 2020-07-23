var color=["red","yellow", "blue","purple"];
for(var i=0; i<color.length; i++)
{
    document.write(color[i] +"<br/>");
    
}
var ask=prompt("Which color you want to add in the begnning: ");
color=[ask,"red","yellow", "blue","purple"];
document.write("<br/> <h1>Updated</h1> <br/>");
for(var i=0; i<color.length; i++)
{
    document.write(color[i] +"<br/>");
    
}
var ask1=prompt("Which color you want to add in the end: ");
color=[ask,"red","yellow", "blue","purple", ask1];
document.write("<br/> <h1>Updated</h1> <br/>");
for(var i=0; i<color.length; i++)
{
    document.write(color[i] +"<br/>");
    
}

color=["white","grey",ask,"red","yellow", "blue","purple", ask1];
document.write("<br/> <h1>Updated</h1> <br/>");
document.write("<h3>Added two more in the begining</h3>");
for(var i=0; i<color.length; i++)
{
    document.write(color[i] +"<br/>");
    
}
color=["grey",ask,"red","yellow", "blue","purple", ask1];
document.write("<br/> <h1>Updated</h1> <br/>");
document.write("<h3>Deleted first color</h3>");
for(var i=0; i<color.length; i++)
{
    document.write(color[i] +"<br/>");
    
}
color=["grey",ask,"red","yellow", "blue","purple"];
document.write("<br/> <h1>Updated</h1> <br/>");
document.write("<h3>Deleted last color</h3>");
for(var i=0; i<color.length; i++)
{
    document.write(color[i] +"<br/>");
    
}

var temp=Number(prompt("Which index you want to add color: "));
var colorname=prompt("Color name: ");
color[temp]= colorname;
document.write("<br/> <h1>Updated</h1> <br/>");
for(var i=0; i<color.length; i++)
{
    document.write(color[i] +"<br/>");
    
}
var temp1=Number(prompt("at which index you want to delete color: "));
color[temp1]=null;
document.write("<br/> <h1>Updated</h1> <br/>");
for(var i=0; i<color.length; i++)
{
    document.write(color[i] +"<br/>");
    
}
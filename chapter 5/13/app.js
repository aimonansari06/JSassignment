var snack="Brownies", age=20, maxage=65, esamount=2;
var maxsupply=(65-20)*esamount;


document.write(" <h1>The Lifetime Supply Calculator</h1> <br/>");
document.write(" your favorite snack: "+snack+"<br/>");
document.write(" your current age: "+age+"<br/>");
document.write(" your maximum age: "+maxage+"<br/>");
document.write("  estimated amount per day: "+ esamount+"<br/>");
document.write("You will need "+maxsupply+ " to last you until the ripe old age of "+maxage);
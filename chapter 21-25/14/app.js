var fruits = ["cake", "apple pie", "cookie", "chips", "patties"]
var temp=prompt("Welcome to ABC bakery. What do you want to order? ")
temp=temp.toLowerCase();
if(temp==fruits[0])
{
    document.write(temp+" is available in our bakery at index 0")
}
else if(temp==fruits[1])
{
    document.write(temp+" is available in our bakery at index 1")
}
else if(temp==fruits[2])
{
    document.write(temp+" is available in our bakery at index 2")
}
else if(temp==fruits[3])
{
    document.write(temp+" is available in our bakery at index 3")
}
else if(temp==fruits[4])
{
    document.write(temp+" is available in our bakery at index 4")
}
else{
    document.write(temp+" is not available");
}
  
 



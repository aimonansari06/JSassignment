var age=Number(prompt("Enter your age: "))
var cdate= new Date()
var dob= cdate.getFullYear()-age
document.write("Your Age: "+age+"<br/>")
document.write("Your Birth year: "+dob)

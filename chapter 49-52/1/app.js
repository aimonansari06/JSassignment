
function show()
{
	var Fname,Lname,mail,age,gender;
	Fname=document.getElementById('fname').value;
	Lname=document.getElementById('lname').value;
	mail=document.getElementById('email').value;
	age=document.getElementById('age').value;
	gender=document.getElementById('gender').value;
	document.getElementById('display').innerHTML='Name: '+Fname+" "+Lname+" Email: "+mail+" age: "+age+" Gender: "+gender;
	

}
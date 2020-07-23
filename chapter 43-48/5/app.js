var sec1=1;

function increase()
{
	var temp=sec1++;
	document.getElementById('sec1').innerHTML=temp;
	console.log(temp)
}
function decrease()
{

	temp=sec1--;
	document.getElementById('sec1').innerHTML=temp;
	console.log(temp)
}

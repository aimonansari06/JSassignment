main()
function main()
{
	var a=Number(prompt("marks of subj a: "));
	var b=Number(prompt("marks of subj b: "));
	var c=Number(prompt("marks of subj a: "));
	var avg= findAvg(a,b,c)
	var totatmarks=300;
	var add=a+b+c;
	var percentage=findPerc(add,totatmarks)
	document.write("Average= ",avg)
	document.write("<br/>Percentage= ",percentage)

}

function findAvg(x,y,z)
{
	var res=(x+y+z)/3;
	return res
}

function findPerc(temp1, temp2)
{
	var ans=(temp1/temp2)*100;
	return ans;
}




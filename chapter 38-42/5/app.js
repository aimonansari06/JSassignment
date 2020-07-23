var text=prompt("enter a text: ")
var find=prompt("enter a char to get its index")

for(var i=0; i<text.length; i++)
{
	if(text[i]==find)
	{
		document.write("Found "+ find+ " at index "+(i+1));
	}
}
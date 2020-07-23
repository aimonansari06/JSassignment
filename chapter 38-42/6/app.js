var t=prompt("enter a text: ")
var v=["a","e","i","o","u","A","E","I","O","U"]
remvowel(t,v)
function remvowel(text, vowels)
{
	for(var i=0; i<text.length;i++)
	{
		for(var x=0; x<vowels.length; x++)
		{
			if(text[i]==vowels[x])
			{
				text=text[i].replace(text[i]," ")
				
			}
			
		}
	
		
	}
	document.write(text);
}



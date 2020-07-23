document.write("Text: The quick brown fox jumps over the lazy dog")
var text="The quick brown fox jumps over the lazy dog"
text=text.toLowerCase()
var spltext=text.split(" ")


var count=0
for(var i=0; i<spltext.length; i++)
{
    for(var x=0; i<spltext.length; i++)
    {
        if(spltext[i]==spltext[x])
        {
            var res=spltext[i]
            count++;
        }
    }
}
document.write("<br/>There are "+ count+" occurrence(s) of the word: "+ res)
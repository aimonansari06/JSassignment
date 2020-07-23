var word="Hello world";
document.write("String: "+word +"<br/>");
for(var i=0; i<word.length; i++)
{
    if(word[i]=='l')
    {
        var num=i;
    }
}

document.write("Last index of 'l': "+ num);

var temp=prompt("enter a string: ")
var letter=prompt("enter a char: ")
var count=0;
charcount(temp, letter)
function charcount(word, let) 
{
 for(i=0; i<temp.length; i++)
 {
    if(temp[i]==let)
    {
       count++;
    }

 }
 document.write("<h3>Letter</h3> "+ let+" <h3>occurs</h3> "+ count+" <h3>times in word</h3> "+ word)
}

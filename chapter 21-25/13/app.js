var name=prompt("Enter name: ")
for(var i=0; i<name.length; i++)
{
    if(name[i]=='!'|| name[i]==','|| name[i]=='.'|| name[i]=='@')
    {
        alert("Please enter a valid username");
    }
}
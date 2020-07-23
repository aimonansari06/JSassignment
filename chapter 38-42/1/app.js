var a=Number(prompt("enter num: "));
var b=Number(prompt("enter its power: "));


function power(x,y)
{
    var p=1;
    for(var i=1; i<=y; i++)
    {
        p*=x;
    }
    return p;
}
var res=power(a,b);
document.write(res);

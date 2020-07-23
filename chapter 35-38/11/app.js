var temp=prompt("enter a string: ")
var temp1= temp.split(" ")
var callfun=uppercase(temp1)
function uppercase(str){
  for(var i=0; i<str.length; i++)
  {
    document.write(str[i].slice(0,1).toUpperCase()+str[i].slice(1)+" ")
  }
}


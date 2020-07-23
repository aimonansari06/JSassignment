var temp=prompt("enter a string: ")
var result=palindrome(temp)
function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while(i < j) {
      if(str[i] == str[j]) {
          i++; 
          j--;
      }
      else {
          return false;
      }
  }
  return true;
}
if(result==true)
{
  document.write("String is Palindrome")
}
else if(result==false)
{
  document.write("String is not Palindrome")
}
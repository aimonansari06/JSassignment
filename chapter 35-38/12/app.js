var temp=prompt("enter a string: ")

function longestWord(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  str.forEach(function(str) {
      if (longest < str.length) {
          longest = str.length;
          word = str;
      }
  });
  return word;
}
document.write(longestWord(temp));
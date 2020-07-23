var num=Number(prompt("Enter any number: "))

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  var callfun=factorial(num)
  document.write("factorial of "+num+" is: "+callfun)



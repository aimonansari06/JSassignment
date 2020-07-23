main()
function main()
{
    var count = 1, working_hours, over_time;
    var over_time_pay;

   
        var working_hours=Number(prompt("Enter working hours"))
        if(working_hours>40)
        {
            over_time = working_hours - 40;
            over_time_pay = over_time * 12.00;
            document.write("Employee No "+count+" overtime pay is "+ over_time_pay);
        }
		else
		{
			document.write("You have to work for more than 40 hours to get over time pay");
		}
           

        
  
}
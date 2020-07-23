var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul","Aug","Sep","Oct","Nov","Dec"];
var now = new Date();
var themonth = now.getMonth();
var nameOfmonth = monthNames[themonth];
var nounits=410
var cofunit=16
var netapay=nounits*cofunit
var late=350
var grosspay=netapay+late
document.write("<h1>K-ELECTRIC BILL</h1>")
document.write("<h3>Customer name: ABC Customer </h3>")
document.write("<h3>Current Month: "+nameOfmonth+"</h3>")
document.write("<h3>Number of Units: "+nounits+"</h3>")
document.write("<h3>Charges per Units:"+cofunit+" </h3>")
document.write("<br/>")
document.write("<h3>Late Payment Charge: "+late+"</h3> ")
document.write("<h3>Gross Amount Payable: "+grosspay+"</h3> ")

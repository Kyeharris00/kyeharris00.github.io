


function purchase(){


var Book = {

name:document.getElementById("bk1").innerHTML, 

price: document.getElementById("price1").innerHTML,



quantity: prompt("How many books?", "")//document.getElementById("q1").value



}

//

//alert(test)

var can = Book.price

var pricio = can.replace("$","");

var test = parseInt(pricio);

var total = ((test) * (Book.quantity));

 
var tax = total * .075;

var tax1 = tax.toFixed(2);

var amountDue = total + tax;



var RoundamountDue = amountDue.toFixed(2);

alert("Your total Charges are $" +  RoundamountDue);




// if statement allowing me to add to the cart




  if(){


 var work = document.getElementById("spit").innerHTML = "Price: " + Book.price + "<br> Quantity: " + Book.quantity + "<br> Total: $" + total + "<br> Taxes: $" + tax1 + "<br> Amount Due: $" + RoundamountDue;




/*  Method of adding payment to the html page via append

var creation = document.createElement("div");

var tt = document.createTextNode("Price: " + Book.price + "<br> Quantity: " + Book.quantity +"<br> Total: $" + total + "<br> Taxes: $" + tax1 + "<br> Amount Due: $" + RoundamountDue
);

creation.appendChild(tt);

var currentDiv = document.getElementById("spit"); 
  document.body.insertBefore(creation, boxie);   

  */



  }


}


function purchase2(){




var Book2 = {

name:document.getElementById("bk2").innerHTML, 

price: document.getElementById("price2").innerHTML,



quantity: prompt("How many books?", "")//document.getElementById("q1").value





}


//

//alert(test)

var can = Book2.price

var pricio = can.replace("$","");

var test = parseInt(pricio);

var total = ((test) * (Book2.quantity));

 
var tax = total * .075;

var tax1 = tax.toFixed(2);

var amountDue = total + tax;



var RoundamountDue = amountDue.toFixed(2);

alert("Your total Charges are $" +  RoundamountDue);


document.getElementById("receipt").innerHTML = document.write("Price: " + Book2.price + "<br> Quantity: " + Book2.quantity + "<br> Total: $" + total + "<br> Taxes: $" + tax1 + "<br> Amount Due: $" + RoundamountDue);

}


function purchase3(){


var Book3 = {

name:document.getElementById("bk3").innerHTML, 

price: document.getElementById("price3").innerHTML,



quantity: prompt("How many books?", "")//document.getElementById("q1").value

}


//

//alert(test)

var can = Book3.price

var pricio = can.replace("$","");

var test = parseInt(pricio);

var total = ((test) * (Book3.quantity));

 
var tax = total * .075;

var tax1 = tax.toFixed(2);

var amountDue = total + tax;



var RoundamountDue = amountDue.toFixed(2);

alert("Your total Charges are $" +  RoundamountDue);


document.getElementById("receipt").innerHTML = document.write("Price: " + Book3.price + "<br> Total: $" + total + "<br> Taxes: $" + tax1 + "<br> Amount Due: $" + RoundamountDue);

}




//var bookie = [[document.getElementById("bk1").innerHTML],[document.getElementById("bk2").innerHTML],[document.getElementById("bk3").innerHTML]];
 //document.getElementById("title").innerHTML = bookie[0];







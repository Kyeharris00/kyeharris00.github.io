

    var shoppingCart = [];

    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
   
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        var cart_total_price=0;
     
        for(var product in shoppingCart){
           
            var row=orderedProductsTblBody.insertRow();
      
            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align="right";
   
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
        }
   
        document.getElementById("cart_total").innerHTML=cart_total_price;
    }


    function AddtoCart(name,description,price){
   
       var singleProduct = {};
     
       singleProduct.Name=name;
       singleProduct.Description=description;

       price = (price * description)
       singleProduct.Price=price;

       shoppingCart.push(singleProduct);
    
       displayShoppingCart();



    }  



   function checking(){

  var money = document.getElementById("cart_total").innerHTML;

   	var calc =  ((money * .075));


   		var comp = ((calc + parseInt(money)));

   		totally = comp.toFixed(2);

   	console.log(money);
 	console.log(calc);

document.getElementById("truTotal").innerHTML = "Tax: $" + calc + "<br>" + 
"Total: $" + totally;


 	if(comp >= 100 ){

address = prompt("Please enter your shipping address:", "");
 

 		alert("You are authorized to pay with credit card");

var card = prompt("Please enter 16 digit Card Number:","");


if(card != NaN && card.length === 16){
	var pin = prompt("Please enter 4 digit Pin #:","");}
  
  else if( card == NaN || card.length != 16 ){

  	alert("Invalid submission");}
  


 else if( pin == NaN || pin.length != 4 ){

	alert("Invalid submission");
}


 if( pin != NaN  && pin.length == 4){

	alert("Thank You, your $" + totally + " order has been placed");

confirm("We will ship your purchase to " + address);


}


 	}



 	if(comp == 0 || comp == NaN){

alert("Your cart is empty");

 	}


if( comp <= 100 && comp > 0){

	address = prompt("Please enter your shipping address:", "");
 

	alert(" Pay $" + totally + " with cash via mail to address: 1494 Below View Road NW Suite #82 ");

confirm("We will ship your purchase to " + address);

}




   }


    function RemovefromCart(name,description,price){
      
       var singleProduct = {};
     
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price= price;
     
       shoppingCart.splice(singleProduct);

       document.getElementById("truTotal").innerHTML = 0;

       displayShoppingCart();



    }  
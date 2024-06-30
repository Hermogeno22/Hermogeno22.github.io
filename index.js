var product1 = document.getElementById("product1")
var qty1 = document.getELementById("qty1")
var product1 = document.getElementById("price1")

var product2 = document.getElementById("product2")
var qty2 = document.getELementById("qty2")
var product2 = document.getElementById("price2")

var carts = document.getElementById("carts")
var total = document.getELementById("total")
var cash = document.getElementById("cash")
var change = document.getElementById("change")

function addOrder() {
  carts.textContent=""
  if(parseFlloat(qty1.value) > 0){
    var order= qty1.value.toString() + ' pc/s x '+ price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)  + "\n" 
    //carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
    var order= qty2.value.toString() + ' pc/s x '+ price2.textContent + '------'+ product2.textContent + '------ Php' + (parseFloat(qty2.value)*parseFloat(price2.textContent) + "\n" 
    //carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
    totalOrder.value="";
    
  }
}
qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
  
  
  
  

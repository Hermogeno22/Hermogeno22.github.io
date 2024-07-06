var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");



var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";
    let sum = 0;

    if (parseFloat(qty1.value) > 0) {
        var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + '------' + product1.textContent + '------ Php' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
        carts.textContent += order;
        sum += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }
    if (parseFloat(qty2.value) > 0) {
        var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------ Php' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
        carts.textContent += order;
        sum += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }
    if (parseFloat(qty3.value) > 0) {
        var order = qty3.value.toString() + ' pc/s x ' + price3.textContent + '------' + product3.textContent + '------ Php' + (parseFloat(qty3.value) * parseFloat(price3.textContent)) + '\n';
        carts.textContent += order;
        sum += parseFloat(qty3.value) * parseFloat(price3.textContent);
    }

    total.value = "Total: Php " + sum.toFixed(2);

    if (parseFloat(cash.value) > 0) {
        var cashTendered = parseFloat(cash.value);
        var changeAmount = cashTendered - sum;
        change.value = "Change: Php " + changeAmount.toFixed(2);
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", addOrder);

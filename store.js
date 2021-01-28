let removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);
for(let i = 0; i < removeCartItemButtons.length; i++){
  let button = removeCartItemButtons[i];
  button.addEventListener('click',function(event){
    console.log("buttonclicked");
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  })
}

function updateCartTotal(){
 let cartItemContainer = document.getElementsByClassName('cart-items')[0];
 console.log(cartItemContainer);
 let cartRows = cartItemContainer.getElementsByClassName('cart-row');
 console.log(cartRows);
 let total = 0;
 for(let i = 0; i < cartRows.length; i++){
  let cartRow = cartRows[i];
  console.log(cartRows);
  let priceElement = cartRow.getElementsByClassName('cart-price')[0];
  let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
  let price = parseFloat(priceElement.innerText.replace('$',''));
  let quantity = quantityElement.value;
  total += (price * quantity);
 }
 document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

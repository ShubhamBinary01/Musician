let removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);
for(let i = 0; i < removeCartItemButtons.length; i++){
  let button = removeCartItemButtons[i];
  button.addEventListener('click',function(event){
    console.log("buttonclicked");
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
  })
}


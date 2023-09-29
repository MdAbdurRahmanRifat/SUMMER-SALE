let sum = 0;
let percentage = 0;

function cardclickBtn(target) {
  let CarditemName = target.childNodes[3].childNodes[5].innerText;
  let paseNameContainer = document.getElementById("pasName");
  let Numbering = pasName.childElementCount + 1;
  let li = document.createElement("li");
  // li.innerText = CarditemName;
  li.innerText = `${Numbering}.${CarditemName}`;
  paseNameContainer.appendChild(li);
  let cardPriceContainer =
    target.childNodes[3].childNodes[7].childNodes[0].innerText;
  let cardPriceNumber = parseFloat(cardPriceContainer);
  let cardPrice = cardPriceNumber.toFixed(2);
  sum = parseFloat(sum) + parseFloat(cardPrice);
  let totalcontainer = document.getElementById("get-total");
  totalcontainer.innerText = sum.toFixed(2);
  //   percentage calculation
   percentage = (20 / 100) * sum;
  

  let purchaseContainer = document.getElementById("Purchase-btn");
  if (totalcontainer.innerText > 0) {
    purchaseContainer.removeAttribute("disabled");
  }
  let applyButtonContainer = document.getElementById("apply-btn");
  if (totalcontainer.innerText >= 200) {
    applyButtonContainer.removeAttribute("disabled");
  }
  return percentage;
}

document.getElementById("apply-btn").addEventListener("click", function () {
  let applyInputContainer = document.getElementById("aply-inpt");
  let applyInputValue = applyInputContainer.value;
  applyInputContainer.value = '';
  // setting inner value of discount
  let DiscountContainer = document.getElementById("get-discount");
  let DiscountValueString = DiscountContainer.innerText;
  let DiscountValueNumber = parseFloat(DiscountValueString)
  // setting final total price
  let FinaltotalContainer = document.getElementById('final-total');
  let FinaltotalString = FinaltotalContainer.innerText;
  let FinaltotalNumber = parseFloat(FinaltotalString);
  let finalTotal = sum - percentage;
  


  if (applyInputValue === "SELL200") {
    DiscountValueNumber = percentage;
    DiscountContainer.innerText = DiscountValueNumber.toFixed(2);
    FinaltotalContainer.innerText = finalTotal.toFixed(2);
  }else{
    DiscountContainer.innerText = 0.00;
  }
});

// modal section script

document.getElementById('Purchase-btn').addEventListener('click', function(){
    let modalContainer = document.getElementById('modal');
    modalContainer.classList.remove('hidden')
})

document.getElementById('home-btn').addEventListener('click',function(){

})

// reset all thing
document.getElementById('home-btn').addEventListener('click',function(){
    window.location.href = 'index.html'; 
})
// .checked = property that determines the checked state of an HTML checkbox or radio button element

const checkBox = document.getElementById("checkBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){
    if(checkBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa!`;
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `You are paying with mastercard!`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with paypal!`;
    }
    else{
        paymentResult.textContent = `You must select a payment type.`;
    }



}
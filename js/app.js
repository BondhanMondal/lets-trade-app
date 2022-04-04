const depositBtn = document.getElementById("deposit-btn");
const buyBtc = document.getElementById("buy-btc");
const buyEth = document.getElementById("buy-eth");
const balanceField = document.getElementById("balance-field");
const btcField = document.getElementById("btc-field");
const ethfield = document.getElementById("eth-field");

//get value from input box
function getInputValue(boxID){
    let inputBox = document.getElementById(boxID);
    let inputAmount = parseFloat(inputBox.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputBox.value = " ";
        return alert("Please Input Valid Amount Money in Number Format");
    }
    inputBox.value = " ";
    return inputAmount;


}

//update balance
depositBtn.addEventListener("click", function(event){
    event.preventDefault();
    /* let depositBox = document.getElementById('deposit-box');
    let availableBalance = parseFloat(balanceField.innerText);
    let inputAmount = parseFloat(depositBox.value);
    if (isNaN(inputAmount) || inputAmount < 0){
        depositBox.value = " ";
        return alert("Please Input Valid Amount Money in Number Format");
    } */
    let inputAmount = parseFloat(getInputValue("deposit-box"));
    let availableBalance = parseFloat(balanceField.innerText);
    if(inputAmount > 0){
        balanceField.innerText = availableBalance + inputAmount;
    }
    
    //depositBox.value = " ";
});
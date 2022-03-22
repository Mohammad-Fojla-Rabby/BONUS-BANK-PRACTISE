const depositValue    = document.getElementById('deposit-total');
const withdrawValue   = document.getElementById('withdraw-total');
const balanceValue    = document.getElementById('balance-total');
const depositInput    = document.getElementById('deposit-input');
const withdrawInput   = document.getElementById('withdraw-input');
const depositButton   = document.getElementById('deposit-button');
const withdrawButton  = document.getElementById('withdraw-button');




function getInputValue(fieldId, fieldId2, condition){
     inputValue = parseFloat(fieldId.value);
    preViousValue = parseFloat(fieldId2.innerText);
      totalDepositValue = preViousValue + inputValue;
      fieldId2.innerText = totalDepositValue;
      

}
depositButton.addEventListener('click', function(){
   getInputValue(depositInput, depositValue);
  const redopositValue = parseFloat(depositValue.innerText);
  const rewithdrawValue = parseFloat(withdrawValue.innerText);
  balanceValue.innerText = 1240 + redopositValue - rewithdrawValue;
})
withdrawButton.addEventListener('click', function(){
    getInputValue(withdrawInput, withdrawValue);
    const redopositValue = parseFloat(depositValue.innerText);
    const rewithdrawValue = parseFloat(withdrawValue.innerText);
    balanceValue.innerText = 1240 + redopositValue - rewithdrawValue;
})
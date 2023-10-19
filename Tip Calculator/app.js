// let preTipTotal = 50;
// let tipPercentage = 10;
// let totalBill = preTipTotal / tipPercentage + preTipTotal;

// totalBill = totalBill.toFixed(2);

// document.write(`Your total bill with tip is ${totalBill}`);

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let preTipTotal = document.getElementById("pre_tip_total").value;
  let tipPercentage = document.getElementById("tip_percentage").value;

  let tipAmount = (document.getElementById("tip_amount").value =
    preTipTotal * (tipPercentage / 100));

  let totalBill = (document.getElementById("total_bill").value =
    parseFloat(tipAmount) + parseFloat(preTipTotal));
});

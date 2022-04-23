
// Alert dismissible function
document.querySelector('.loopple-alert.loopple-alert-dismissible .close').onclick = function() {
 document.querySelector('.loopple-alert').classList.add('loopple-opacity-0');
 setTimeout(function(){
   document.querySelector('.loopple-alert').remove();
 }, 1000);
}

const loanAmt = 60000; // USD
const interestRate = 5.4; // ???
const salary = 5400; // monthly
let months;

// querySelector to select the form "submit" button
// add event listener to it and have it trigger a function that sets all the variables
// up top (using the input data from the form, use querySelector again)
// run loanPayoffTime afterwards

document.querySelector("submit");

// Given the info above, calculate the number of months needed to pay off
// Store that info in months
// If salary cannot pay off the loanAmt, tell the percent of the loan that
// can be paid off
function loanPayoffTime(Principal, rate, loanPayment) {
  var monthly = Math.cbrt(Math.sqrt(Math.sqrt(rate)));
  if (loanPayment <= monthly*Principal) {
    return "You'll never be rid of this student loan!!!!! BWAHAHAHAHAHA";
  }
  var t = 0;
  while(Principal*((1+monthly)**t) > loanPayment*t) {
    t++;
  }
  if (t == 0) {
    return "You can already pay off your loan";
  }
  return "You can pay off your loan in "+t+" Months!";
}



// function payable(amt, rate, wage, months){
//   for (let i = 1; i <= months; i++) {
//     if (wage*i >= amt*rate*i){
//       return "you can pay off your loan in " + i + " months!";
//     }
//   }
//   percentPayable = (amt*rate*months)/(wage*months);
//   return "You can only pay off " + percentPayable + " percent of your loan in the allotted time frame.";
// }
// console.log(payable(loanAmt, interestRate, salary, duration))
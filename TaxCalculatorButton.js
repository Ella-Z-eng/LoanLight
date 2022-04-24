// function myFunc(){
//     alert("You Clicked me");
//   }

var loanAmt = 60000; // USD
var interestRate = 5.4; // ???
var salary = 5400; // monthly
let months;

// querySelector to select the form "submit" button
// add event listener to it and have it trigger a function that sets all the variables
// up top (using the input data from the form, use querySelector again)
// run loanPayoffTime afterwards

const btn = document.getElementById('calculateTax');


function setVariables(loanA, intR, sal){
  loanAmt= loanA;
  interestRate = intR/100;
  salary = sal;
}

btn.addEventListener('click', () => {
  var principal = document.getElementById("amt").value;
  var interest = document.getElementById("interest").value;
  var salary = document.getElementById("salary").value;
  setVariables(parseInt(principal), parseInt(interest), parseInt(salary));
  //setVariables(1, 1, 1);
  //alert("HALP");
  alert(loanPayoffTime(loanAmt, interestRate, salary));
});

function loanPayoffTime(Principal, rate, loanPayment) {
  var monthly = Math.cbrt(Math.sqrt(Math.sqrt(rate+1)))-1;
  if (loanPayment <= monthly*Principal) {
    return "You'll never be rid of this student loan!!!!! BWAHAHAHAHAHA";
  }
  var t = 0;
  while(t < 1800 && Principal*((1+monthly)**t) > loanPayment*t) {
    t++;
  }
  if (t === 0) {
    return "Please fill out the rest of the page";
  } else if (t == 1) {
    return "You can pay off your loan in 1 month!";
  } else if (t >= 1800) {
    return "You will not be able to repay this loan at this rate in your entire lifetime(150 years)";
  } else if (t < 12) {
    return "You can pay off your loan in "+t+" Months!";
  } else {
    var years = Math.floor(t/12);
    var months = t%12;
    if (years > 1) {
      if (months > 1) {
        return "You can pay off your loan in "+years+" Years and "+months+" Months!";
      } else {
        return "You can pay off your loan in "+years+" Years and "+months+" Month!";
      }
    } else {
      if (months > 1) {
        return "You can pay off your loan in "+years+" Year and "+months+" Months!";
      } else {
        return "You can pay off your loan in "+years+" Year and "+months+" Month!";
      }
    }
  }
}
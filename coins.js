/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();

var quarters;
var dimes;
var nickels;
var pennies;


function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse ={};
  var amount = amount * 100

  coinPurse.quarters = parseInt(amount /25) ;
  amount =parseInt(amount - (coinPurse.quarters * 25));
  console.log(coinPurse.quarters);
  coinPurse.dimes = parseInt(amount / 10);
  amount = parseInt(amount - (coinPurse.dimes * 10));
  console.log(coinPurse.dimes);
  coinPurse.nickels = parseInt(amount / 5);
  amount= parseInt(amount - (coinPurse.nickels * 5));
  console.log(coinPurse.nickels);
  coinPurse.pennies = parseInt(amount/ 1)
  console.log(coinPurse.pennies);
  amount = parseInt(amount- (coinPurse.pennies * 1));
  coinPurse = { quarters: coinPurse.quarters, 
                dimes: coinPurse.dimes, 
                nickels:coinPurse.nickels,
                pennies: coinPurse.pennies};
  console.log("quarters: ", coinPurse.quarters, "dimes: ", coinPurse.dimes, "nickels: ", coinPurse.nickels , "pennies: ", coinPurse.pennies);
return coinPurse;

}

var coins = coinCounter(3.17);


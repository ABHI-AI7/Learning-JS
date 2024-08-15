const accountID=16756  // can't be changed dynamically //
var accountPass="12345"
let accountEmail="asahlot7@xyz.com"  // can be changed dynamically whenever another value is passed //
accountCity="Jaipur"
// accountID=2 // not allowed
console.log(accountID);
let accountState;

accountEmail="hc@gmail.com";
accountPass="4567"
accountCity="Delhi"



/*  "var" is globally scoped and function scoped while "let" is block scoped, only accessible within the block in which they are declared  */


console.table([accountEmail,accountPass,accountCity, accountID, accountState]) // alternative of console.log() so that we can print results together //



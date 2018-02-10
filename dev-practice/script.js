// Banking Application
var balance = 1094;
var update = prompt("what is your new bank balance?");
if (parseInt(update) > balance) {
  alert(balance + update)
} else if (parseInt(update) < balance) {
  alert(balance - update);
}

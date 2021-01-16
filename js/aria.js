var increment = document.querySelector('#inc')
var decrement = document.querySelector('#dec')
var counter = document.querySelector('#count');

var count = 0;

increment.addEventListener('click', add);
decrement.addEventListener('click', subtract);

function add() {
  count = count + 10;
  setCount();
}
function subtract() {
  count = count - 10;
  setCount()
}

function setCount() {
  counter.innerHTML = count;
}
setCount()
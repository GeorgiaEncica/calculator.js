console.log("Loaded");


//elemente
const input = document.querySelector('input');
const ac = document.querySelector('ac'); 
const positiveNegative = document.querySelector('positive-negative'); 
const percentaje = document.querySelector('percentaje'); 
const impartire = document.querySelector('impartire'); 
const inmultire = document.querySelector('inmultire'); 
const plus = document.querySelector('plus');
const equal = document.querySelector('equal'); 
const comma = document.querySelector('comma'); 

//numbers
const seven = document.querySelector('seven'); 
const eight = document.querySelector('eight'); 
const nine = document.querySelector('nine'); 

const six = document.querySelector('six'); 
const five = document.querySelector('five'); 
const four = document.querySelector('four'); 


const three = document.querySelector('three'); 
const two = document.querySelector('two'); 
const one = document.querySelector('one'); 

//functions 
const buttonPressed = () => { 
    console.log("button pressed");
}

const insertNine = () => { 
    document.getElementById('input').innerHTML = "9"; 
}


function clearDisplay() {
    document.getElementById('result').innerHTML = ''
  }

  function insert(num) {
    let number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num
  }

  function calculate() {
    var result = document.getElementById('result').innerHTML
    if (result) {
      document.getElementById('result').innerHTML = eval(result).toFixed(2)
    }
    var result = parseFloat(result)
  }

  function clearDisplay() {
    document.getElementById('result').innerHTML = ''
  }
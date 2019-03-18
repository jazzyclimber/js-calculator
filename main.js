//================= Selectors ========================
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('#display');
const operButton = document.querySelectorAll('.operator');

//================ Global Variables =====================
var solution = "";
var numberOne = "";
var numberTwo = "";
var operator = "";

//================ Listenter ============================
//Listens for button push
buttons.forEach( button => {
  button.addEventListener('click', clickListen)
});

// ===============Math Functions===========================
const addNum = function(a, b) {
  return solution = Number(a) + Number(b)
}
const subNum = function(a, b) {
  return solution = a - b
}
const multNum = function(a, b) {
    return solution = a * b
}
const divNum = function (a, b) {
  return (b === 0 ?  solution = "Error: Divide by 0" : solution = (a / b).toPrecision(2))
}

//Calls the above methods
function operate(one, op, two) {
  if (op === "x") {
    return  multNum(one, two)
  } if ( op === "\/") {
    return divNum(one, two);
  } if ( op === "+") {
    return addNum(one, two);
  }
  return subNum(one, two);
}

// ================= General Functions ========================
function clear() {
  display.textContent = "";
  operator = "";
  numberOne = "";
  numberTwo = "";
}
function updateDisplay(num) {
  if ( num == "%") {
    if (operator !== ""){
      numberTwo = numberTwo/100
      display.textContent = numberOne + operator + numberTwo;
      return
    }
    numberOne = numberOne/100
    display.textContent = numberOne
    return

  }
  if (num == "+/-" ) {
    numberOne = -numberOne;
    display.textContent = numberOne;
    return
  }
  if (num == "/" || num == "x" || num == "-" || num == "+") {
    operator = num;
    display.textContent += num;
    return
  } if (operator == ""){
    numberOne += num;
    display.textContent += num;
    return
  }
  numberTwo += num;
  display.textContent += num;
}

function clickListen(event) {
  switch (event.target.getAttribute("id")) {
    case "clear":
      clear()
      break;
    case "equals":
      operate(numberOne, operator, numberTwo);
      clear()
      numberOne = solution;
      display.textContent = solution;
      break;
    case "divide":
      operator = "/"
    case "multiply":
      operator = "x"
    case "add":
      operator = "+";
    case "subtract":
      operator = "-";
    default:
      updateDisplay(event.target.textContent);
      break;
  }
  //This is a checking tool Delete for final product
    // console.log("One: " + numberOne + "Two: " + numberTwo + "operator: " + operator + "Solution: " + solution);
}

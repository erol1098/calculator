"use strict";
//* Buttons
const pad = document.querySelector(".main__buttons");
const btnPlus = document.querySelector(".main__buttons--16");
const btnMinus = document.querySelector(".main__buttons--12");
const btnMultiply = document.querySelector(".main__buttons--8");
const btnDivide = document.querySelector(".main__buttons--4");
const btnEqual = document.querySelector(".main__buttons--19");
const btnAllClear = document.querySelector(".main__buttons--1");
const btnClear = document.querySelector(".main__buttons--100");

//* Screen
let entry = document.querySelector(".main__screen__input--entry");
const secondary = document.querySelector(".main__screen__output--result");
const sign = document.querySelector(".main__screen__input--op");

let previousOperand = "";
let currentOperand = "";
let firstNum = "";
let secondNum = "";

function setOperand(operand) {
  if (previousOperand === "" && entry.textContent !== "") {
    previousOperand = operand;
    firstNum = +entry.textContent;
    secondary.textContent = `${firstNum} ${previousOperand}`;
    entry.textContent = "";
    switchClear();
  } else if (previousOperand !== "" && entry.textContent === "") {
    previousOperand = operand;
    secondary.textContent = `${firstNum} ${previousOperand}`;
  } else if (entry.textContent !== "" && !equalPressed) {
    secondNum = +entry.textContent;
    currentOperand = operand;
    firstNum = calculate(previousOperand);
    secondary.textContent = `${firstNum} ${currentOperand}`;
    entry.textContent = "";
    secondNum = "";
    previousOperand = operand;
    switchClear();
  } else if (entry.textContent !== "" && equalPressed) {
    previousOperand = operand;
    firstNum = +entry.textContent;
    secondNum = "";
    secondary.textContent = `${formatNumber(firstNum)} ${previousOperand}`;
    entry.textContent = "";
    equalPressed = false;
    switchClear();
  }
}

let temp;
let equalPressed = false;
function equal() {
  if (firstNum !== "" && entry.textContent !== "") {
    if (secondNum === "") {
      secondNum = +entry.textContent;
      temp = +entry.textContent;
    } else if (secondNum !== "") {
      secondNum = temp;
    }
    firstNum = calculate(previousOperand);
    entry.textContent = formatNumber(firstNum);
    secondary.textContent = "";
    equalPressed = true;
  }
}

function enterNumber(number) {
  entry.textContent.length < 10 ? (entry.textContent += number) : null;
  btnClear.style.display = "block";
  btnAllClear.style.display = "none";
}

function checkEqual() {
  entry.textContent === "0" ? (entry.textContent = "") : entry;
  if (equalPressed) {
    entry.textContent = "";
    firstNum = previousOperand = secondNum = "";
    removedOp();
    equalPressed = false;
  }
}

function calculate(operand) {
  switch (operand) {
    case "+":
      return firstNum + secondNum;
      break;
    case "-":
      return firstNum - secondNum;
      break;
    case "*":
      return firstNum * secondNum;
      break;
    case "÷":
      return firstNum / secondNum;
      break;
  }
}
function clearAll() {
  entry.textContent = "";
  secondary.textContent = "";
  firstNum = "";
  secondNum = "";
  previousOperand = "";
  currentOperand = "";
  removedOp();
}

function removedOp() {
  btnPlus.classList.remove("selected");
  btnMinus.classList.remove("selected");
  btnMultiply.classList.remove("selected");
  btnDivide.classList.remove("selected");
}
function selectedOp(target) {
  firstNum !== "" && target.classList.add("selected");
}

function formatNumber(number) {
  return number.toString().length > 10 ? number.toExponential(5) : number;
}

function switchClear() {
  btnClear.style.display = "none";
  btnAllClear.style.display = "block";
}

pad.addEventListener("click", (e) => {
  if (e.target.classList.contains("main__buttons--13")) {
    checkEqual();
    enterNumber("1");
  } else if (e.target.classList.contains("main__buttons--14")) {
    checkEqual();
    enterNumber("2");
  } else if (e.target.classList.contains("main__buttons--15")) {
    checkEqual();
    enterNumber("3");
  } else if (e.target.classList.contains("main__buttons--9")) {
    checkEqual();
    enterNumber("4");
  } else if (e.target.classList.contains("main__buttons--10")) {
    checkEqual();
    enterNumber("5");
  } else if (e.target.classList.contains("main__buttons--11")) {
    checkEqual();
    enterNumber("6");
  } else if (e.target.classList.contains("main__buttons--5")) {
    checkEqual();
    enterNumber("7");
  } else if (e.target.classList.contains("main__buttons--6")) {
    checkEqual();
    enterNumber("8");
  } else if (e.target.classList.contains("main__buttons--7")) {
    checkEqual();
    enterNumber("9");
  } else if (e.target.classList.contains("main__buttons--17")) {
    checkEqual();
    enterNumber("0");
  } else if (e.target.classList.contains("main__buttons--18")) {
    checkEqual();
    if (entry.textContent.length < 9) {
      entry.textContent == "" ? (entry.textContent += "0.") : entry;
    }
    !entry.textContent.includes(".") ? (entry.textContent += ".") : entry;
  }
  //* Addition
  else if (e.target.classList.contains("main__buttons--16")) {
    setOperand("+");
    removedOp();
    selectedOp(e.target);
  }
  //* Substraction
  else if (e.target.classList.contains("main__buttons--12")) {
    setOperand("-");
    removedOp();
    selectedOp(e.target);
  }
  //* Multiplication
  else if (e.target.classList.contains("main__buttons--8")) {
    setOperand("*");
    removedOp();
    selectedOp(e.target);
  }
  //* Division
  else if (e.target.classList.contains("main__buttons--4")) {
    setOperand("÷");
    removedOp();
    selectedOp(e.target);
  }
  //* Equal
  else if (e.target.classList.contains("main__buttons--19")) {
    equal();
  }
  //* AC Clear
  else if (e.target.classList.contains("main__buttons--1")) {
    clearAll();
  }
  //* C Clear
  else if (e.target.classList.contains("main__buttons--100")) {
    entry.textContent = "";
    switchClear();
  }

  //* Minus
  else if (e.target.classList.contains("main__buttons--2")) {
    entry.textContent ? (entry.textContent = +entry.textContent * -1) : entry;
  }
  //*  Percent One
  else if (e.target.classList.contains("main__buttons--3")) {
    entry.textContent
      ? (entry.textContent = formatNumber(+entry.textContent / 100))
      : entry;
  }
});

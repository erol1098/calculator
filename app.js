"use strict";
//* Buttons
const pad = document.querySelector(".main__buttons");
const btn1 = document.querySelector(".main__buttons--13");
const btn2 = document.querySelector(".main__buttons--14");
const btn3 = document.querySelector(".main__buttons--15");
const btn4 = document.querySelector(".main__buttons--9");
const btn5 = document.querySelector(".main__buttons--10");
const btn6 = document.querySelector(".main__buttons--11");
const btn7 = document.querySelector(".main__buttons--5");
const btn8 = document.querySelector(".main__buttons--6");
const btn9 = document.querySelector(".main__buttons--7");
const btn0 = document.querySelector(".main__buttons--17");
const btnPlus = document.querySelector(".main__buttons--16");
const btnMinus = document.querySelector(".main__buttons--12");
const btnMultiply = document.querySelector(".main__buttons--8");
const btnDivide = document.querySelector(".main__buttons--4");
const btnEqual = document.querySelector(".main__buttons--19");
const btnClear = document.querySelector(".main__buttons--1");
const btnNegative = document.querySelector(".main__buttons--2");
const btnModulus = document.querySelector(".main__buttons--3");

//* Screen
const entry = document.querySelector(".main__screen__input--entry");
const result = document.querySelector(".main__screen__output--result");
const sign = document.querySelector(".main__screen__input--op");

//* Variables
let firstNum,
  secondNum,
  isFirstNum,
  isSecondNum,
  operator,
  dotDone,
  isOpSelected,
  equalPressed;

//* Setting Program Defaults and AC Button
const setDefaults = function () {
  firstNum = "";
  secondNum = "";
  isFirstNum = false;
  isSecondNum = false;
  operator = "";
  isOpSelected = false;
  dotDone = false;
  entry.textContent = "";
  result.textContent = "";
  sign.textContent = "";
  equalPressed = false;
  btnPlus.classList.remove("selected");
  btnMinus.classList.remove("selected");
  btnMultiply.classList.remove("selected");
  btnDivide.classList.remove("selected");
};

//* Restrict the Length of User Input
const checkLength = function () {
  let check;
  entry.textContent[-1] === "."
    ? (check = 9)
      ? [...entry.textContent].includes(".")
      : (check = 10)
    : (check = 9);

  if (entry.textContent.length > check) {
    entry.textContent = entry.textContent.slice(0, `${check}`);
  }
};

//* Take First Number
const takeFirstNumber = function (op) {
  if (!isFirstNum && !isSecondNum && entry.textContent !== "") {
    firstNum = +entry.textContent;
    entry.textContent = "";
    result.textContent = checkResult(firstNum);
    isFirstNum = true;
    isOpSelected = false;
  }
  selectedOp(op);
};

//* Select Operator
const selectedOp = function (op) {
  if (!isOpSelected) {
    btnPlus.classList.remove("selected");
    btnMinus.classList.remove("selected");
    btnMultiply.classList.remove("selected");
    btnDivide.classList.remove("selected");
    sign.textContent = operator;
    if (!op.classList.contains("main__buttons--19")) {
      op.classList.add("selected");
    }
  }
};

//* Check If Equal Button Pressed
const checkEqual = function () {
  if (equalPressed) {
    entry.textContent = "";
    equalPressed = false;
  }
  checkZero();
};

//* Check If Input Begins with Zero
const checkZero = function () {
  entry.textContent.charAt(0) === "0" &&
  entry.textContent.substring(0, 2) !== "0."
    ? (entry.textContent = entry.textContent.substring(1))
    : null;
};

//* Check Result's Length and Implement Exponential If Required
const checkResult = function (number) {
  let output;
  number > 999999999
    ? (output = number.toExponential(4))
    : number < 0.00000001
    ? (output = number.toExponential(4))
    : number.toString().length > 9
    ? (output = number.toString().substring(0, 9))
    : (output = number);

  return output;
};

//* Do When a Calculus Operand is Pressed
const calculusOp = function (target, operand) {
  if (entry.textContent) {
    dotDone = false;
    equalPressed = false;
    operator = operand;
    takeFirstNumber(target);
  }
};

//* Calculation
const calculate = function () {
  if (operator === "+") {
    firstNum = firstNum + secondNum;
    entry.textContent = checkResult(firstNum);
  } else if (operator === "-") {
    firstNum = firstNum - secondNum;
    entry.textContent = checkResult(firstNum);
  } else if (operator === "*") {
    firstNum = firstNum * secondNum;
    entry.textContent = checkResult(firstNum);
  } else if (operator === "÷") {
    firstNum = firstNum / secondNum;
    entry.textContent = checkResult(firstNum);
  }
};

pad.addEventListener("click", (e) => {
  if (e.target.classList.contains("main__buttons--13")) {
    checkEqual();
    entry.textContent += "1";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--14")) {
    checkEqual();
    entry.textContent += "2";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--15")) {
    checkEqual();
    entry.textContent += "3";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--9")) {
    checkEqual();
    entry.textContent += "4";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--10")) {
    checkEqual();
    entry.textContent += "5";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--11")) {
    checkEqual();
    entry.textContent += "6";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--5")) {
    checkEqual();
    entry.textContent += "7";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--6")) {
    checkEqual();
    entry.textContent += "8";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--7")) {
    checkEqual();
    entry.textContent += "9";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--17")) {
    checkEqual();
    entry.textContent !== "0" ? (entry.textContent += "0") : entry.textContent;
    checkLength();
  } else if (e.target.classList.contains("main__buttons--18")) {
    checkEqual();
    !dotDone ? (entry.textContent += ".") : dotDone;
    checkLength();
    dotDone = true;
  }
  //* Addition
  else if (e.target.classList.contains("main__buttons--16")) {
    calculusOp(e.target, "+");
  }
  //* Substraction
  else if (e.target.classList.contains("main__buttons--12")) {
    calculusOp(e.target, "-");
  }
  //* Multiplication
  else if (e.target.classList.contains("main__buttons--8")) {
    calculusOp(e.target, "*");
  }
  //* Division
  else if (e.target.classList.contains("main__buttons--4")) {
    calculusOp(e.target, "÷");
  }
  //* Equal
  else if (e.target.classList.contains("main__buttons--19")) {
    if (isFirstNum && !isSecondNum) {
      entry.textContent === 0 || entry.textContent
        ? (secondNum = +entry.textContent)
        : operator === "+"
        ? (secondNum = 0)
        : operator === "-"
        ? (secondNum = 0)
        : operator === "*"
        ? (secondNum = 1)
        : operator === "÷"
        ? (secondNum = 1)
        : secondNum;
      entry.textContent = "";
      dotDone = false;
      calculate(); //! Don't change the order
      secondNum = "";
      isFirstNum = false;
      isSecondNum = false;
      selectedOp(e.target);
      isOpSelected = true;
      sign.textContent = "";
      result.textContent = "";
      equalPressed = true;
    }
  }
  //* AC Clear
  else if (e.target.classList.contains("main__buttons--1")) {
    setDefaults();
  }
  //* Minus
  else if (e.target.classList.contains("main__buttons--2")) {
    entry.textContent && (entry.textContent = -1 * +entry.textContent);
  }
  //*  Percent One
  else if (e.target.classList.contains("main__buttons--3")) {
    entry.textContent &&
      entry.textContent !== "0" &&
      (entry.textContent = checkResult(+entry.textContent * 0.01));
  }
});
setDefaults();

"use strict";

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

const entry = document.querySelector(".main__screen__input--entry");
const result = document.querySelector(".main__screen__output--result");
const sign = document.querySelector(".main__screen__input--op");

let firstNum,
  secondNum,
  isFirstNum,
  isSecondNum,
  operator,
  dotDone,
  isOpSelected,
  equalPressed;
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
  // document.querySelector(".main__screen__output").classList.add("hidden");
  // document.querySelector(".main__screen__input").classList.remove("hidden");
};
const display = function () {
  // document.querySelector(".main__screen__output").classList.remove("hidden");
  // document.querySelector(".main__screen__input").classList.add("hidden");
};
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
  // document.querySelector(".main__screen__output").classList.add("hidden");
  // document.querySelector(".main__screen__input").classList.remove("hidden");
};

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

const checkEqual = function () {
  if (equalPressed) {
    entry.textContent = "";
    equalPressed = false;
  }
};

const checkResult = function (number) {
  let output;
  number > 999999999
    ? (output = number.toExponential(4))
    : number < 0.00000001
    ? (output = number.toExponential(4))
    : number.toString().length > 9
    ? (output = [...number.toString()].slice(0, 9).join(""))
    : (output = number);

  return output;
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
    entry.textContent += "0";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--18")) {
    checkEqual();
    !dotDone ? (entry.textContent += ".") : dotDone;
    checkLength();
    dotDone = true;
  }
  //* toplama
  else if (e.target.classList.contains("main__buttons--16")) {
    operator = "+";
    dotDone = false;
    equalPressed = false;
    takeFirstNumber(e.target);
  }
  //* Çıkarma
  else if (e.target.classList.contains("main__buttons--12")) {
    operator = "-";
    dotDone = false;
    equalPressed = false;
    takeFirstNumber(e.target);
  }
  //* Çarpma
  else if (e.target.classList.contains("main__buttons--8")) {
    operator = "*";
    dotDone = false;
    equalPressed = false;
    takeFirstNumber(e.target);
  }
  //* Bölme
  else if (e.target.classList.contains("main__buttons--4")) {
    operator = "÷";
    dotDone = false;
    equalPressed = false;
    takeFirstNumber(e.target);
  }
  //* Eşittir
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
      secondNum = "";
      isFirstNum = false;
      isSecondNum = false;
      // display();
      selectedOp(e.target);
      isOpSelected = true;
      sign.textContent = "";
      result.textContent = "";
      equalPressed = true;
    }
  }
  //* Clear
  else if (e.target.classList.contains("main__buttons--1")) {
    setDefaults();
  }
  //* Minus
  else if (e.target.classList.contains("main__buttons--2")) {
    entry.textContent && (entry.textContent = -1 * +entry.textContent);
  }

  //* modulus
  else if (e.target.classList.contains("main__buttons--3")) {
    entry.textContent &&
      (entry.textContent = checkResult(+entry.textContent * 0.01));
  }
});
setDefaults();

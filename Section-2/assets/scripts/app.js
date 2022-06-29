const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// gets input from input field
const getUserNumberInput = () => parseInt(userInput.value);

// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialValue = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialValue, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialValue = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialValue, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialValue = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialValue, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialValue = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialValue, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

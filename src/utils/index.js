export const calculation = (calcArray, currentResult) => {
  if (isNaN(calcArray[calcArray.length - 1])) {
    return currentResult;
  }

  const operatorFunctions = {
    "+": (a, b) => {
      return a + b;
    },
    "-": (a, b) => {
      return a - b;
    },
    "*": (a, b) => {
      return a * b;
    },
    "/": (a, b) => {
      return a / b;
    },
    ".": (a, b) => {
      return Number(a + "." + b);
    },
  };

  let calcString = calcArray.join("");

  let calcArrayUpdated = calcString.split(/(\+|-|\*|\/)/g);

  let result = 0;

  let operator = "+";

  for (let i = 0; i < calcArrayUpdated.length; i++) {
    let item = calcArrayUpdated[i];
    let isOperator = /(\+|-|\*|\/)/.test(item);

    if (isOperator) {
      operator = item;
    } else {
      result = operatorFunctions[operator](result, parseInt(item));
    }
  }

  return result;
};

export const addValueToCalculation = (value, currentState) => {
  currentState = [...currentState];

  let operatorValues = ["*", "/", "+", "-", "/100*", "."];

  if (typeof value !== "number" && !operatorValues.includes(value)) {
    return currentState;
  }

  if (operatorValues.includes(value) && !currentState.length) {
    return currentState;
  }

  let lastVal = currentState[currentState.length - 1];

  let lastValIsOperator = operatorValues.includes(lastVal);

  let currentValIsOperator = operatorValues.includes(value);

  if (lastValIsOperator && currentValIsOperator) {
    currentState[currentState.length - 1] = value;

    return currentState;
  }
  console.log(...currentState, value, "HHHHHHHHHHHHHHHHHHH");
  return [...currentState, value];
};

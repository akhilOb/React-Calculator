import { calculation, addValueToCalculation } from "../utils";
import {
  UPDATE_CALCULATION_AND_RESULT,
  CLEAR_ALL,
  ON_EQUAL_PRESS_UPDATE_CALCULATION_AND_RESULT,
  UPDATE_ON_CLICK_SHIFT,
} from "../constants";

export const updateCalculation = (inputValue, currentState) => {
  let updateCalculationArray = addValueToCalculation(inputValue, currentState);

  return {
    type: UPDATE_CALCULATION_AND_RESULT,
    payload: {
      calculation: updateCalculationArray,
      result: 0,
    },
  };
};
export const onEqualPress = (inputValue, currentState, currentResult) => {
  let updateCalculationArray = addValueToCalculation(inputValue, currentState);
  let calculationResult = calculation(updateCalculationArray, currentResult);
  return {
    type: ON_EQUAL_PRESS_UPDATE_CALCULATION_AND_RESULT,
    payload: {
      calculation: updateCalculationArray,
      result: calculationResult,
    },
  };
};

export const onShiftPress = (currentResult) => {
  console.log(currentResult * -1, "currentResultcurrentResult");
  let calculationResult = Number(currentResult * -1);
  return {
    type: UPDATE_ON_CLICK_SHIFT,
    payload: {
      calculation: [],
      result: calculationResult,
    },
  };
};
export const clearCalculation = () => {
  return {
    type: CLEAR_ALL,
    payload: {
      calculation: [],
      result: 0,
    },
  };
};

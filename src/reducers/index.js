import {
  ON_EQUAL_PRESS_UPDATE_CALCULATION_AND_RESULT,
  UPDATE_CALCULATION_AND_RESULT,
  CLEAR_ALL,
  UPDATE_ON_CLICK_SHIFT,
} from "../constants";

const initialState = {
  calculation: [],
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CALCULATION_AND_RESULT:
      return {
        calculation: action.payload.calculation,
      };
    case ON_EQUAL_PRESS_UPDATE_CALCULATION_AND_RESULT:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result,
      };
    case UPDATE_ON_CLICK_SHIFT:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result,
      };
    case CLEAR_ALL:
      return {
        calculation: [],
        result: 0,
      };
    default:
      return state;
  }
};

export default calculatorReducer;

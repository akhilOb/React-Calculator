import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateCalculation,
  clearCalculation,
  onEqualPress,
  onShiftPress,
} from "./actions/index";
import "./App.css";
import CalcButton from "./components/calcButtons";

class CalculatorComponent extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  _replaceChars(value) {
    console.log(value, "kkkkkkkkkkkkkkk");
    value = value.join("");
    value = value.replace(/\//g, '<span class="operatorStyle">÷</span>');
    value = value.replace(/\*/g, '<span class="operatorStyle">×</span>');
    value = value.replace(/\+/g, '<span class="operatorStyle">+</span>');
    value = value.replace(/-/g, '<span class="operatorStyle">-</span>');
    value = value.replace(/\/100*/g, '<span class="operatorStyle">%</span>');
    console.log(
      value,
      "kkkkkkkkkkkkkkk",
      (/\/100*/g, '<span class="operatorStyle">%</span>')
    );
    return value;
  }

  render() {
    return (
      <div className="background">
        <div className="calc-body">
          <div
            className="calculation-area"
            dangerouslySetInnerHTML={{
              __html: this.props.calculation.length
                ? this._replaceChars(this.props.calculation)
                : 0,
            }}
          />
          <div className="answer-area">{this.props.result}</div>
          <div className="buttons-area">
            <div className="calculator-inputs-row">
              <button
                onClick={() => this.props.clearCalculation()}
                className=" clear-button normal-keys"
              >
                C
              </button>
              <button
                onClick={() => this.props.onShiftPress(this.props.result)}
                className="clear-button normal-keys"
              >
                ±
              </button>
              <CalcButton
                value="/100*"
                className="button-outer "
                additionalClass="normal-keys"
                htmlCode="37"
              />
              <CalcButton
                value="/"
                htmlCode="247"
                additionalClass="operator"
                className="button-outer"
              />
            </div>
            <div className="calculator-inputs-row">
              <CalcButton
                value={7}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value={8}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value={9}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value="*"
                htmlCode="215"
                additionalClass="operator"
                className="button-outer"
              />
            </div>
            <div className="calculator-inputs-row">
              <CalcButton
                value={4}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value={5}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value={6}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value="-"
                htmlCode="8722"
                additionalClass="operator"
                className="button-outer"
              />
            </div>
            <div className="calculator-inputs-row">
              <CalcButton
                value={1}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value={2}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value={3}
                className="button-outer"
                additionalClass="normal-keys"
              />
              <CalcButton
                value="+"
                htmlCode="43"
                additionalClass="operator"
                className="button-outer"
              />
            </div>
            <div className="calculator-inputs-row">
              <div className="bottom-byto">
                <CalcButton
                  value={0}
                  className="button-outer"
                  additionalClass="normal-keys"
                />
                <CalcButton
                  value="."
                  className="button-outer"
                  additionalClass="normal-keys"
                  htmlCode="46"
                />
              </div>
              <div className="bottom-byto byto-right">
                <button
                  onClick={() =>
                    this.props.onEqualPress(
                      this.props.value,
                      this.props.calculation,
                      this.props.result
                    )
                  }
                  htmlCode="61"
                  additionalClass="operator equal-sign"
                  className=" equal-button operator"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) =>
    dispatch(updateCalculation(inputValue, currentState, currentResult)),
  onEqualPress: (inputValue, currentState, currentResult) =>
    dispatch(onEqualPress(inputValue, currentState, currentResult)),
  onShiftPress: (currentResult) => dispatch(onShiftPress(currentResult)),

  clearCalculation: () => dispatch(clearCalculation()),
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorComponent);

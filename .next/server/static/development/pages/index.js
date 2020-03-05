module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_container_feeCharges_FeeCharges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/container/feeCharges/FeeCharges */ "./src/container/feeCharges/FeeCharges.js");
/* harmony import */ var _src_container_feeCharges_feeChargesform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/container/feeCharges/feeChargesform */ "./src/container/feeCharges/feeChargesform.js");
/* harmony import */ var _src_globalStyles_globalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/globalStyles/globalStyle */ "./src/globalStyles/globalStyle.js");
var _jsxFileName = "/Users/amyvarga/web/nutmeg/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(_src_globalStyles_globalStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), __jsx("noscript", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "noscript",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "You need to enable JavaScript to run this app.")), __jsx(_src_container_feeCharges_FeeCharges__WEBPACK_IMPORTED_MODULE_1__["default"], {
      maxMonths: "36",
      currency: "\xA3",
      render: props => __jsx(_src_container_feeCharges_feeChargesform__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/calculateTotalFees.js":
/*!***********************************!*\
  !*** ./src/calculateTotalFees.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calculateTotalFees = (startingContribution, monthlyContribution, months) => {
  startingContribution = Number(startingContribution);
  monthlyContribution = Number(monthlyContribution);
  months = Number(months);
  const feeCharge = 0.0625 / 100;
  let accunulatedWealth = startingContribution;
  let totalFee = 0;
  let monthlyFee = 0;
  let i = 1;

  while (i < months) {
    i++;
    accunulatedWealth = accunulatedWealth + monthlyContribution - monthlyFee;
    monthlyFee = (accunulatedWealth * feeCharge).toFixed(14);
    totalFee = (parseFloat(totalFee) + parseFloat(monthlyFee)).toFixed(14);
  }

  return parseFloat(totalFee);
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTotalFees);

/***/ }),

/***/ "./src/components/form/SubmitButton.js":
/*!*********************************************!*\
  !*** ./src/components/form/SubmitButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_submitButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/submitButton */ "./src/components/form/styles/submitButton.js");
var _jsxFileName = "/Users/amyvarga/web/nutmeg/src/components/form/SubmitButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SubmitButton = ({
  error,
  text
}) => {
  let hasError = false;
  if (Object.entries(error).length > 0) hasError = true;
  return __jsx(_styles_submitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: hasError,
    hasError: hasError,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);

/***/ }),

/***/ "./src/components/form/TextInput.js":
/*!******************************************!*\
  !*** ./src/components/form/TextInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_feeCharges_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../container/feeCharges/copy */ "./src/container/feeCharges/copy.js");
/* harmony import */ var _styles_textInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/textInput */ "./src/components/form/styles/textInput.js");
var _jsxFileName = "/Users/amyvarga/web/nutmeg/src/components/form/TextInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TextInput = ({
  name,
  id,
  value,
  onChange,
  label,
  ariaRequired,
  error,
  currency
}) => {
  return __jsx(_styles_textInput__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_styles_textInput__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, label), __jsx(_styles_textInput__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_styles_textInput__WEBPACK_IMPORTED_MODULE_2__["CurrencyWrapper"], {
    hasError: !!error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_styles_textInput__WEBPACK_IMPORTED_MODULE_2__["Currency"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, currency)), __jsx(_styles_textInput__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    hasError: !!error,
    className: "form-control",
    name: name,
    id: id,
    type: "text",
    value: value,
    onChange: onChange,
    "aria-required": ariaRequired,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx("div", {
    role: "alert",
    "aria-labelledby": id,
    className: `error ${error ? "visible" : "hidden"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, error ? __jsx(_styles_textInput__WEBPACK_IMPORTED_MODULE_2__["InputError"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, error) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, _container_feeCharges_copy__WEBPACK_IMPORTED_MODULE_1__["default"].inputAriaAlert))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./src/components/form/styles/submitButton.js":
/*!****************************************************!*\
  !*** ./src/components/form/styles/submitButton.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  color: var(--color-base-basic);
  background-color: ${props => props.hasError ? "var(--color-base-greyscale-boulder)" : "var(--color-base-nutmeg-primary)"};
  border: none;
  cursor: pointer;
  padding: 0.5em 2em;
  font: inherit;
  font-family:  var(--font-base-family-light);
  font-weight: var(--size-typography-font-weight-lite);
  letter-spacing: var(--size-typography-letter-spacing-xs);
  border-radius: var(--size-forms-border-border-radius);
  text-shadow: 0.3px 0.3px 0.3px rgba(0,0,0,0.2);
  :hover {
    background-color: ${props => props.hasError ? "var(--color-base-greyscale-boulder)" : "var(--color-base-nutmeg-dark)"};
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/form/styles/textInput.js":
/*!*************************************************!*\
  !*** ./src/components/form/styles/textInput.js ***!
  \*************************************************/
/*! exports provided: Wrapper, InputWrapper, CurrencyWrapper, Currency, Label, Input, InputError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyWrapper", function() { return CurrencyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputError", function() { return InputError; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../globalStyles/variables */ "./src/globalStyles/variables.js");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  @media (min-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.xl}px) {
    flex-basis: 50%;
  }
  @media (max-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.xl}px) {
    flex-basis: 100%;
  }
  @media (min-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.xl}px) {
    :first-child {
      > div {
        margin-right: var(--size-spacing-m);
      }
    }
    :nth-child(2) {
      > div {
        margin-left: var(--size-spacing-m);
      }
    }
  }
  @media (max-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.xl}px) {
    margin-bottom: var(--size-spacing-m);
  }
`;
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
`;
const CurrencyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.hasError ? "var(--color-base-error-light)" : "var(--color-base-greyscale-silver)"};
  transition: border-color ease-in-out 0.3s;
`;
const Currency = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  font-family: var(--font-base-family-light);
  margin-right: 0.25em;
  line-height: var(--size-forms-input-input-height-l);
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label`
  color: var(--color-base-greyscale-mineshaft);
  font: inherit;
  font-family: var(--font-base-family-light);
  font-size: var(--size-typography-font-size-s);
  font-weight: var(--size-typography-font-weight-lite);
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
  flex: 1;
  padding:0;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: var(--size-forms-input-input-height-l);
  color: var(--color-base-greyscale-mineshaft);
  font: inherit;
  font-family: var(--font-base-family-light);
  font-weight: var(--size-typography-font-weight-lite);
  border-bottom-color: ${props => props.hasError ? "var(--color-base-error-light)" : "var(--color-base-greyscale-silver)"};
  transition: border-color ease-in-out 0.3s;
`;
const InputError = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font: inherit;
  font-family: var(--font-base-family-light);
  font-weight: var(--size-typography-font-weight-lite);
  color: var(--color-base-error-light);
`;

/***/ }),

/***/ "./src/container/feeCharges/FeeCharges.js":
/*!************************************************!*\
  !*** ./src/container/feeCharges/FeeCharges.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./src/container/feeCharges/validation.js");
/* harmony import */ var _calculateTotalFees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../calculateTotalFees */ "./src/calculateTotalFees.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const FeeCharges = ({
  render,
  maxMonths,
  currency
}) => {
  const {
    0: calc,
    1: setCalc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    start: null,
    month: null,
    fee: null
  });
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: {
      start: 500,
      month: 250
    },
    validate: _validation__WEBPACK_IMPORTED_MODULE_2__["default"],
    onSubmit: ({
      start,
      month
    }, {
      setSubmitting
    }) => {
      const myFees = Object(_calculateTotalFees__WEBPACK_IMPORTED_MODULE_3__["default"])(start, month, maxMonths).toFixed(2);
      setCalc({
        start: start,
        month: month,
        fee: myFees
      });
      setSubmitting(false);
    }
  });
  return render(_objectSpread({}, formik, {
    maxMonths,
    calc,
    currency
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FeeCharges);

/***/ }),

/***/ "./src/container/feeCharges/Result.js":
/*!********************************************!*\
  !*** ./src/container/feeCharges/Result.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy */ "./src/container/feeCharges/copy.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/container/feeCharges/styles.js");
var _jsxFileName = "/Users/amyvarga/web/nutmeg/src/container/feeCharges/Result.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Result = ({
  fee,
  currency,
  start,
  month,
  months
}) => {
  const alert = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (fee) alert.current.focus();
  }, [fee]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ResultWrapper"], {
    ref: alert,
    tabIndex: "0",
    role: "alert",
    "aria-labelledby": "form",
    className: `${fee ? "visible" : "hidden"} result`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, fee ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "With a starting contribution of ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, currency), start), " and a monthly contribution of ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, currency), month), " we will deduct a total of ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, currency), fee), " in a timeframe of ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, months), " months.") : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, _copy__WEBPACK_IMPORTED_MODULE_1__["default"].resultAriaAlert));
};

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./src/container/feeCharges/copy.js":
/*!******************************************!*\
  !*** ./src/container/feeCharges/copy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const copy = {
  majorHeading: "Fee charges",
  secondaryHeading: "Set your amounts",
  formLegend: "Calculate fee charges",
  inputStart: "Starting contribution",
  errorStartMin: "Minimum starting amount is £500",
  inputMonth: "Monthly contribution",
  errorMonthtMin: "Minimum monthly contribution is £10",
  inputAriaAlert: "The alert will trigger when there is an error in the input",
  errorNum: "Enter a number",
  buttonSubmit: "Calculate",
  resultAriaAlert: "The alert will trigger when a calculation has been submitted"
};
/* harmony default export */ __webpack_exports__["default"] = (copy);

/***/ }),

/***/ "./src/container/feeCharges/feeChargesform.js":
/*!****************************************************!*\
  !*** ./src/container/feeCharges/feeChargesform.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form/TextInput */ "./src/components/form/TextInput.js");
/* harmony import */ var _components_form_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form/SubmitButton */ "./src/components/form/SubmitButton.js");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Result */ "./src/container/feeCharges/Result.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/container/feeCharges/styles.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copy */ "./src/container/feeCharges/copy.js");
var _jsxFileName = "/Users/amyvarga/web/nutmeg/src/container/feeCharges/feeChargesform.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FeeChargesForm = ({
  values,
  errors,
  handleSubmit,
  handleChange,
  currency,
  maxMonths,
  calc
}) => {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["SectionWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    role: "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, _copy__WEBPACK_IMPORTED_MODULE_5__["default"].majorHeading), __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("legend", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, _copy__WEBPACK_IMPORTED_MODULE_5__["default"].formLegend), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, _copy__WEBPACK_IMPORTED_MODULE_5__["default"].secondaryHeading), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["TextInputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_components_form_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "start",
    id: "start",
    value: values.start,
    onChange: handleChange,
    label: _copy__WEBPACK_IMPORTED_MODULE_5__["default"].inputStart,
    ariaRequired: "true",
    error: errors.start,
    currency: currency,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_components_form_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "month",
    id: "month",
    value: values.month,
    onChange: handleChange,
    label: _copy__WEBPACK_IMPORTED_MODULE_5__["default"].inputMonth,
    ariaRequired: "true",
    error: errors.month,
    currency: currency,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), __jsx(_Result__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fee: calc.fee,
    currency: currency,
    start: calc.start,
    month: calc.month,
    months: maxMonths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_components_form_SubmitButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: _copy__WEBPACK_IMPORTED_MODULE_5__["default"].buttonSubmit,
    error: errors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeeChargesForm);

/***/ }),

/***/ "./src/container/feeCharges/styles.js":
/*!********************************************!*\
  !*** ./src/container/feeCharges/styles.js ***!
  \********************************************/
/*! exports provided: SectionWrapper, Section, TextInputWrapper, ButtonWrapper, ResultWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return SectionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputWrapper", function() { return TextInputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultWrapper", function() { return ResultWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalStyles/variables */ "./src/globalStyles/variables.js");


const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
  @media (min-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.xxl}px) {
    flex-basis: 37.5%;
  }
  @media (min-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.lg}px) and (max-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.xxl}px) {
    flex-basis: 60%;
  }
  @media (max-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.lg}px) {
    flex-basis: 100%;
  }
  background: var(--color-base-greyscale-wildsand);
  margin: 0 auto;
  padding: 1em 1em 4em 1em;
`;
const TextInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  @media (max-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.xl}px) {
    flex-wrap: wrap;
  }
  margin-top: 1em;
  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`;
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin: 1em 0;
`;
const ResultWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  p {
    margin-bottom: 0;
    @media (max-width: ${_globalStyles_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints.xl}px) {
      margin-top: 0;
    }
  } 
`;

/***/ }),

/***/ "./src/container/feeCharges/validation.js":
/*!************************************************!*\
  !*** ./src/container/feeCharges/validation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy */ "./src/container/feeCharges/copy.js");

const minStart = Number(500);
const minMonth = Number(10);

const validate = ({
  month,
  start
}) => {
  const errors = {};

  if (Number(start) < minStart) {
    errors.start = _copy__WEBPACK_IMPORTED_MODULE_0__["default"].errorStartMin;
  } else if (isNaN(start)) {
    errors.start = _copy__WEBPACK_IMPORTED_MODULE_0__["default"].errorNum;
  }

  if (Number(month) < minMonth) {
    errors.month = _copy__WEBPACK_IMPORTED_MODULE_0__["default"].errorMonthtMin;
  } else if (isNaN(month)) {
    errors.month = _copy__WEBPACK_IMPORTED_MODULE_0__["default"].errorNum;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./src/globalStyles/globalStyle.js":
/*!*****************************************!*\
  !*** ./src/globalStyles/globalStyle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  :root {
    --color-base-basic: #FFFFFF;
    --color-base-nutmeg-primary: #2fb153;
    --color-base-nutmeg-dark: #23843e;
    --color-base-greyscale-cod: #1b1b1b;
    --color-base-greyscale-slate: #2e2e2e;
    --color-base-greyscale-mineshaft: #454545;
    --color-base-greyscale-boulder: #757575;
    --color-base-greyscale-silver: #c9c9c9;
    --color-base-greyscale-mercury: #e6e6e6;
    --color-base-greyscale-wildsand: #f7f7f7;
    --color-base-error-light: #F67268;
    --font-base-family-light: 'GothamSSm-Light', sans-serif;
    --font-base-family-book: 'GothamSSm-Book', sans-serif;
    --font-base-family-medium: 'GothamSSm-Medium', sans-serif;
    --font-base-family-bold: 'GothamSSm-Bold', sans-serif;
    --breakpoints-devices-xxs: 320;
    --breakpoints-devices-xs: 480;
    --breakpoints-devices-sm: 568;
    --breakpoints-devices-md: 640;
    --breakpoints-devices-lg: 768;
    --breakpoints-devices-xl: 960;
    --breakpoints-devices-xxl: 1024;
    --size-font-small: 0.75rem; /* the small size of the font */
    --size-font-medium: 1rem; /* the medium size of the font */
    --size-font-large: 2rem; /* the large size of the font */
    --size-font-base: 1rem; /* the base size of the font */
    --size-forms-border-border-radius: 2px;
    --size-forms-input-input-height-l: 2rem;
    --size-spacing-m: 1rem;
    --size-typography-font-size-xl: 1.2rem;
    --size-typography-font-size-l: 1rem;
    --size-typography-font-size-m: 0.75rem;
    --size-typography-font-size-s: 0.7rem;
    --size-typography-line-height-m: 1.4rem;
    --size-typography-letter-spacing-xs: -0.05rem;
    --size-typography-font-weight-lite: 200rem;
  }
  .App {
    margin: 0;
  }
  html {
    color: var(--color-base-greyscale-cod);
    font-size: var(--size-font-medium);
    line-height: var(--size-typography-line-height-m);
  }
  h3 {
    font-family: var(----font-base-family-bold);
    color: var(--color-base-greyscale-cod);
    font-size: var(--size-font-large);
    line-height: var(--size-typography-line-height-m);
    letter-spacing: var(--size-typography-letter-spacing-xs);
  }
  h4 {
    font-family: var(----font-base-family-bold);
    font-size: var(--size-font-base);
    margin-bottom: 0;
  }
  p {
    font-size:  var(--size-font-small);
  }
  fieldset {
    border: 1px solid var(--color-base-greyscale-mercury);
    border-radius: var(--size-forms-border-border-radius);
    background-color: var(--color-base-basic);
    filter: drop-shadow(0.15em 0.15em 0.4em var(--color-base-greyscale-mercury));
  }
  form-group {
    text-align: left;
    position: relative;
  }
  legend, .hidden {
    display: none;
  }
  .visible {
    display: inline-block;
  }
  *:focus {
    outline: none;
  }
  .noscript {
    background-color: var(--color-base-error-light);
    color: var(--color-base-basic);
    font: inherit;
    font-family: var(--font-base-family-light);
    font-weight: var(--size-typography-font-weight-lite);
    padding: var(--size-spacing-m);
    text-align: center;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./src/globalStyles/variables.js":
/*!***************************************!*\
  !*** ./src/globalStyles/variables.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const variables = {
  /* colors: {
    basic: "#FFFFFF",
    nutmeg_primary: "#2FB153",
    nutmeg_dark: "#23843E",
    greyscale_cod: "#1B1B1B",
    greyscale_slate: "#2E2E2E",
    greyscale_mineshaft: "#454545",
    greyscale_boulder: "#757575",
    greyscale_silver: "#C9C9C9",
    greyscale_mercury: "#E6E6E6",
    greyscale_wildsand: "#F7F7F7",
    error_light: "#F67268"
  },
  fonts: {
    font_family_light: "'GothamSSm-Light', sans-serif",
    font_family_book: "'GothamSSm-Book', sans-serif",
    font_family_medium: "'GothamSSm-Medium', sans-serif",
    font_family_bold: "'GothamSSm-Bold', sans-serif"
  },
  typography: {
    font_size_primary: "1em",
    font_size_major: "0.75em",
    font_size_minor: "0.7em",
    font_size_h3: "1.2em",
    font_size_h4: "1em",
    line_height_primary: "1.4em",
    letter_spacing_wide: "0",
    font_weight_minor: "200",
  }, */
  breakpoints: {
    xxs: 320,
    xs: 480,
    sm: 568,
    md: 640,
    lg: 768,
    xl: 960,
    xxl: 1024
  }
  /* ,
  forms: {
   border_radius: "2px",
   input_height_primary: "2em"
  },
  spacing: {
   default: "1em"
  } */

};
/* harmony default export */ __webpack_exports__["default"] = (variables);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amyvarga/web/nutmeg/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
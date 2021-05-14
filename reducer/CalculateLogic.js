import React from 'react-native';
import operate from './operate';
import isNumber from './isNumber';
import Big from 'big.js';
const initialState = {
  total: null,
  next: null,
  operation: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'operation':
      if (action.buttonName === 'AC') {
        return {
          total: null,
          next: null,
          operation: null,
        };
      }
      if (isNumber(action.buttonName)) {
        if (action.buttonName === '0' && state.next === '0') {
          return {};
        }
        // If there is an operation, update next
        if (state.operation) {
          if (state.next) {
            return {...state, next: state.next + action.buttonName};
          }
          return {...state, next: action.buttonName};
        }
        // If there is no operation, update next and clear the value
        if (state.next) {
          const next =
            state.next === '0'
              ? action.buttonName
              : state.next + action.buttonName;
          return {
            ...state,
            next,
            total: null,
          };
        }
        return {
            ...state,
          next: action.buttonName,
          total: null,
        };
      }
      if (action.buttonName === '%') {
        if (state.operation && state.next) {
          const result = operate(state.total, state.next, state.operation);
          return {
            total: Big(result).div(Big('100')).toString(),
            next: null,
            operation: null,
          };
        }
        if (state.next) {
          return {
            ...state,
            next: Big(state.next).div(Big('100')).toString(),
          };
        }
        return {};
      }
      if (action.buttonName === '.') {
        if (state.next) {
          // ignore a . if the next number already has one
          if (state.next.includes('.')) {
            return {};
          }
          return {...state, next: state.next + '.'};
        }
        return {...state, next: '0.'};
      }
      if (action.buttonName === '=') {
        if (state.next && state.operation) {
            console.log('here i am');
          return {
            total: operate(state.total, state.next, state.operation),
            next: null,
            operation: null,
          };
        } else {
          // '=' with no operation, nothing to do
          return {};
        }
      }
      if (action.buttonName === '+/-') {
        if (state.next) {
          return {...state, next: (-1 * parseFloat(state.next)).toString()};
        }
        if (state.total) {
          return {...state, total: (-1 * parseFloat(state.total)).toString()};
        }
        return {};
      }
      if (state.operation) {
        return {
          total: operate(state.total, state.next, state.operation),
          next: null,
          operation: action.buttonName,
        };
      }
      if (!state.next) {
        return {...state, operation: action.buttonName};
      }
      return {
        total: state.next,
        next: null,
        operation: action.buttonName,
      };
    default:
      throw new Error();
  }
};

export default reducer;

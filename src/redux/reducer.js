import {Types} from './types';

const {LOG_IN, LOG_OUT} = Types;

const initialState = {
  authToken: null,
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        authToken: action.payload,
      };
    case LOG_OUT:
      return {
        authToken: action.payload,
      };
    default:
      return state;
  }
};
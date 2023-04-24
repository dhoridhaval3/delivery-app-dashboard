import { CreateUserAction } from '../../Interfaces';
import * as Types from '../types';

const initialState = {
  data: [
    {
      id: 1,
      name: 'John Doe',
    },
  ],
  loading: false,
  error: null,
};

export const TestReducer = (state = initialState, action: CreateUserAction) => {
  const { type, payload } = action;
  switch (type) {
    case Types.CREATE_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.CREATE_USER_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload],
        loading: false,
      };
    case Types.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default TestReducer;

import { CreateUser } from '../../Interfaces';
import * as Type from '../types';

export const createUser = (payload: CreateUser) => {
  return async (dispatch: any) => {
    dispatch({ type: Type.CREATE_USER_BEGIN });
    try {
      return dispatch({ type: Type.CREATE_USER_SUCCESS, payload });
    } catch (error) {
      return dispatch({ type: Type.CREATE_USER_FAILURE, payload: error });
    }
  };
};

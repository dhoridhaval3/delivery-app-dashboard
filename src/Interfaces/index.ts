import * as Types from '../redux/types';
// Create User

// Actions Creator
export interface CreateUser {
  id: number;
  name: string;
}

// Action type in reducer
type UserActionTypes =
  | typeof Types.CREATE_USER_BEGIN
  | typeof Types.CREATE_USER_SUCCESS
  | typeof Types.CREATE_USER_FAILURE;

export interface CreateUserAction {
  type: UserActionTypes;
  payload?: CreateUser | string;
}

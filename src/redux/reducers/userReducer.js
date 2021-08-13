import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: [],
  user: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };

    case ActionTypes.GET_ONE_USER:
      return {
        ...state,
        user: payload,
      };

    case ActionTypes.REMOVE_USER:
      return {
        ...state,
        user: [],
      };

    default:
      return state;
  }
};

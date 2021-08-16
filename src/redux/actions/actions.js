import { ActionTypes } from "../constants/action-types";
import axios from "axios";

const api = "https://611a2e82cbf1b30017eb5569.mockapi.io/users";

export const setUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(api);
    dispatch({
      type: ActionTypes.SET_USERS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.USERS_ERROR,
      payload: console.log(error),
    });
  }
};

export const getOneUser = (obj) => async (dispatch) => {
  const actualUsers = await axios.get(api);

  const filteredUser = actualUsers.data.filter((user) => user.id == obj.id);

  dispatch({
    type: ActionTypes.GET_ONE_USER,
    payload: filteredUser,
  });
};

export const removeUser = () => {
  return {
    type: ActionTypes.REMOVE_USER,
  };
};

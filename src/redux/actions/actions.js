import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const setUsers = () => async (dispatch) => {
  const api =
    "http://www.filltext.com/?rows=100&id={index}&email={email}&username={username}&password={randomString|5}&business={business}&pretty=true";

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

export const getOneUser = (obj) => {
  return {
    type: ActionTypes.GET_ONE_USER,
    payload: obj,
  };
};

export const removeUser = () => {
  return {
    type: ActionTypes.REMOVE_USER,
  };
};

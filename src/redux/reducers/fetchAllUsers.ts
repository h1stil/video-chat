import axios from "axios";
import { AppDispatch } from "../store";
import { User } from "./allUsersSlice";
import { allUsersSlice } from "./allUsersSlice";
const adminToken = localStorage.getItem("AUTH");

export const fetchAllUsersSlice = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(allUsersSlice.actions.usersFetching());
    const response = await axios.get<User[]>(
      `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}/users`,
      {
        headers: {
          authorization: `Bearer ${adminToken}`,
        },
      }
    );

    dispatch(allUsersSlice.actions.usersFetchingSuccess(response.data));
  } catch (e) {
    dispatch(allUsersSlice.actions.usersFetchingError("Error"));
  }
};

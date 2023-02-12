import axios from "axios";
import { AppDispatch } from "../store";
import { User } from "./allUsersSlice";
import { allUsersSlice } from "./allUsersSlice";
const adminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwucnUiLCJpZCI6MTEsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiJBRE1JTiIsImRlc2NyaXB0aW9uIjoiQWRtaW5pc3RyYXRvciIsImNyZWF0ZWRBdCI6IjIwMjMtMDItMDRUMTA6MTI6NTQuNTQyWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDItMDRUMTA6MTI6NTQuNTQyWiIsIlVzZXJSb2xlcyI6eyJpZCI6Niwicm9sZUlkIjoxLCJ1c2VySWQiOjExfX1dLCJpYXQiOjE2NzYxNDU5NTEsImV4cCI6MTY3NjIzMjM1MX0.ERuOGDnCdAf9WX5n5LeRzaoUtUEt0dsRgayCe5FIDX0";

export const fetchAllUsersSlice = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(allUsersSlice.actions.usersFetching());
    const response = await axios.get<User[]>(
      `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/users`,
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

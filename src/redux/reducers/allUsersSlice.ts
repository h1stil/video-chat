import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  banned: boolean;
  banReason: null | boolean;
  avatar: null | string;
  role: string;
  createdAt: string;
  updateAt: string;
  roles: [
    {
      id: number;
      value: string;
      description: string;
      createdAt: string;
      updateAt: string;
      UserRoles: {
        id: number;
        roleId: number;
        userId: number;
      };
    }
  ];
}

interface allUsersState {
  allUsers: User[];
  isLoading: boolean;
  error: string;
}

const initialState: allUsersState = {
  allUsers: [],
  isLoading: false,
  error: "",
};

export const allUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<User[]>) {
      state.isLoading = false;
      state.error = "";
      state.allUsers = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default allUsersSlice.reducer;

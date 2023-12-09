import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface UserType {
  id: number;
  name: string;
}
interface AuthState {
  phoneVerifyToken?: string;
  user?: UserType;
}

const initialState: AuthState = {
  phoneVerifyToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updatePhoneVerifyToken: (state, action: PayloadAction<string | undefined>) => {
      state.phoneVerifyToken = action.payload;
    },
    updateUser: (state, action: PayloadAction<UserType | undefined>) => {
      state.user = action.payload;
    },
  },
});

export const { updatePhoneVerifyToken, updateUser } = authSlice.actions;

export const selectPhoneVerifyToken = (state: RootState) => state.auth.phoneVerifyToken;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;

import { createSlice, configureStore } from '@reduxjs/toolkit';

const loginInfo = createSlice({
  name: 'userInfoReducer',
  initialState: { userInfo: {} },
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
const store = configureStore({reducer: loginInfo.reducer})

export const { getUserInfo } = loginInfo.actions;
export default store

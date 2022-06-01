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

const loginState = createSlice({
  name: 'userLoginReducer',
  initialState: {userLoginState:false},
  reducers: {
    getUserLogin: (state, action) => {
      state.userLoginState = true;
    },
    getUserLogout: (state, action)=>{
      state.userLoginState =false;
    }
  },
});
const store = configureStore({reducer: {loginInfo:loginInfo.reducer, loginState:loginState.reducer}})
export const { getUserLogin, getUserLogout} = loginState.actions;
export const { getUserInfo } = loginInfo.actions;
export default store

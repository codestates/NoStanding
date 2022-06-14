import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; //로컬스토리지 사용
// import session from 'redux-persist/lib/storage/session'; //세션스토리지 사용

const checkLoginHold = createSlice({
  name: "holdLogin",
  initialState: false,
  reducers: {
    clickCheckBox: (state) => {
      return state = !state;
    },
  },
});

const loginInfo = createSlice({
  name: "userInfo",
  initialState: { userInfo: {} },
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUserInfo: (state) => {
      state.userInfo = {};
    },
  },
});

const loginState = createSlice({
  name: "userLogin",
  initialState: { userLoginState: false },
  reducers: {
    getUserLogin: (state) => {
      state.userLoginState = true;
    },
    getUserLogout: (state) => {
      state.userLoginState = false;
    },
  },
});

const shopSearch = createSlice({
  name: "searchInfo",
  initialState: { shopSearchInfo: "" },
  reducers: {
    getShopSearch: (state, action) => {
      state.shopSearchInfo = action.payload;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginInfo", "loginState", "checkLoginHold"],
};

const rootReducer = combineReducers({
  loginInfo: loginInfo.reducer,
  loginState: loginState.reducer,
  shopSearch: shopSearch.reducer,
  checkLoginHold: checkLoginHold.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const { getUserLogout, getUserLogin } = loginState.actions;
export const { getShopSearch } = shopSearch.actions;
export const { getUserInfo, deleteUserInfo } = loginInfo.actions;
export const { clickCheckBox } = checkLoginHold.actions;

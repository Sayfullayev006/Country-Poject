import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducer';
// import productsReducer from './reducer';
import LikeReducer from './LikeReducer';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    LikeProduct:LikeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartSlice, { initializeCart } from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

store.dispatch(initializeCart());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

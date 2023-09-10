import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  fields: {
    price: string;
  };
}

interface CartState {
  cart: CartItem[];
  isItemExistsModal: boolean;
  isItemAddedModal: boolean;
}

const initialState: CartState = {
  cart: [],
  isItemExistsModal: false,
  isItemAddedModal: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

      if (!existingItem) {
        state.cart.push(action.payload);
        state.isItemAddedModal = true; 
      } else {
        state.isItemExistsModal = true;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    closeModal: (state) => {
      state.isItemExistsModal = false;
      state.isItemAddedModal = false;
    },
    initializeCart: (state) => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        state.cart = JSON.parse(savedCart);
      }
    },
  },
});

export const { addToCart, removeFromCart, initializeCart, closeModal } = cartSlice.actions;
export default cartSlice.reducer;

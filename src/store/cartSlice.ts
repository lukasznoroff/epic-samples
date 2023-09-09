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
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

      if (!existingItem) {
        state.cart.push(action.payload);
      } else {
        console.log('This samplepack already exists in your cart');
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    initializeCart: (state) => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        state.cart = JSON.parse(savedCart);
      }
    },
  },
});

export const { addToCart, removeFromCart, initializeCart } = cartSlice.actions;
export default cartSlice.reducer;

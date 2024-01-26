import { Product } from "./../../types/product.d";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type ProductInCart = {
  product: Product;
  quantity: number;
};
let initialState: { products: ProductInCart[] } = {
  products: [],
};
export const cartSlice = createSlice({
  initialState,
  name: "AddToCart",
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      state.products = [...state.products, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (product) => product.product.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product) => {
        if (product.product.id === action.payload) {
          product.quantity = product.quantity + 1;
          console.log(action.payload);
        }
        return product;
      });
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product) => {
        if (product.product.id === action.payload && product.quantity > 1) {
          product.quantity = product.quantity - 1;
        }
        return product;
      });
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

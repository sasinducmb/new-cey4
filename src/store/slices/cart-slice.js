import { v4 as uuidv4 } from 'uuid';
import cogoToast from 'cogo-toast';
const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      
      let cartItem;
      if (product.variation) {
        cartItem = state.cartItems.find(
          item =>
            item._id === product._id &&
            product.selectedProductColor &&
            product.selectedProductColor === item.selectedProductColor &&
            product.selectedProductSize &&
            product.selectedProductSize === item.selectedProductSize
        );
      } else {
        cartItem = state.cartItems.find(item => item._id === product._id);
      }

      if (!cartItem) {
        state.cartItems.push({
          ...product,
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: uuidv4()
        });
      } else {
        state.cartItems = state.cartItems.map(item => {
          if (item.cartItemId === cartItem.cartItemId) {
            return {
              ...item,
              quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1
            };
          }
          return item;
        });
      }

      cogoToast.success("Added To Cart", { position: "bottom-left" });
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
      cogoToast.error("Removed From Cart", { position: "bottom-left" });
    },
    decreaseQuantity(state, action) {
      const product = action.payload;
      if (product.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
        cogoToast.error("Removed From Cart", { position: "bottom-left" });
      } else {
        state.cartItems = state.cartItems.map(item =>
          item.cartItemId === product.cartItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        cogoToast.warn("Item Decremented From Cart", { position: "bottom-left" });
      }
    },
    deleteAllFromCart(state) {
      state.cartItems = [];
      cogoToast.error("Cart Cleared", { position: "bottom-left" });
    }
  },
});

export const { addToCart, deleteFromCart, decreaseQuantity, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;

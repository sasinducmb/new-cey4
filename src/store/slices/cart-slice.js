import { v4 as uuidv4 } from "uuid";
import cogoToast from "cogo-toast";
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      
      // Add validation to ensure product has required properties
      if (!product || !product._id) {
        cogoToast.error("Invalid product data", { position: "bottom-left" });
        return;
      }
      
      let cartItem;
      if (product.selectedVariation) {
        cartItem = state.cartItems.find(
          (item) =>
            item._id === product._id &&
            item.selectedVariation?._id === product.selectedVariation._id
        );
      } else {
        cartItem = state.cartItems.find((item) => item._id === product._id);
      }
      
      const deliveryCost = parseFloat(product.deliveryCost || 0);
      
      // Calculate available stock
      const saleCount = product.saleCount || 0;
      const availableStock = (product.stock || 0) - saleCount;
      
      // Determine the quantity to add (or default to 1)
      const quantityToAdd = product.quantity || 1;
      
      if (!cartItem) {
        // Initial add to cart logic
        if (quantityToAdd > availableStock) {
          cogoToast.warn("Maximum limit reached", { position: "bottom-left" });
        } else {
          state.cartItems.push({
            ...product,
            quantity: quantityToAdd,
            deliveryCost: deliveryCost,
            totalDeliveryCost: deliveryCost * quantityToAdd,
            cartItemId: uuidv4(),
          });
          cogoToast.success("Added To Cart", { position: "bottom-left" });
        }
      } else {
        // Logic for updating quantity if the item already exists in the cart
        const newQuantity = cartItem.quantity + quantityToAdd;
        
        if (newQuantity > availableStock) {
          cogoToast.warn("Maximum limit reached", {
            position: "bottom-left",
          });
        } else {
          state.cartItems = state.cartItems.map((item) => {
            if (item.cartItemId === cartItem.cartItemId) {
              return {
                ...item,
                quantity: newQuantity,
                totalDeliveryCost: deliveryCost * newQuantity,
              };
            }
            return item;
          });
          cogoToast.success("Added To Cart", { position: "bottom-left" });
        }
      }
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload
      );
      cogoToast.error("Removed From Cart", { position: "bottom-left" });
    },
    decreaseQuantity(state, action) {
      const product = action.payload;
      if (product.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.cartItemId !== product.cartItemId
        );
        cogoToast.error("Removed From Cart", { position: "bottom-left" });
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.cartItemId === product.cartItemId) {
            const newQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: newQuantity,
              totalDeliveryCost: parseFloat(product.deliveryCost || 0) * newQuantity,
            };
          }
          return item;
        });
        cogoToast.warn("Item Decremented From Cart", {
          position: "bottom-left",
        });
      }
    },
    deleteAllFromCart(state) {
      state.cartItems = [];
      // cogoToast.error("Cart Cleared", { position: "bottom-left" });
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  deleteAllFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
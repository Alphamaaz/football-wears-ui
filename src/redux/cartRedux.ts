
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductInterface {
  id: number;
  title: string;
  image: string;
  price: string; // assuming price is stored as a string like "2,350.00"
  quantity: number;
  activeSize:string,
  activeSleeve:string
}
interface CartState{
  products:ProductInterface[],
  quantity:number,
  total:number
}
const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductInterface>) => {
     const rawPrice = action.payload.price; // e.g., "2,350.00"

     // Remove commas and decimal part before parsing
     const cleanedPrice = rawPrice.replace(/,/g, "").split(".")[0]; // "2350"

     // Convert to number
     const price = parseFloat(cleanedPrice);


      const qty = action.payload.quantity || 0;

      state.quantity += 1;
      state.products.push(action.payload);
      state.total += price * qty;
    },
    removeProduct: (state, action) => {
      const productId = action.payload.id;

      const productIndex = state.products.findIndex(
        (product) => product.id === productId
      );

      if (productIndex > -1) {
        const removedProduct = state.products[productIndex];

      const rawPrice = action.payload.price; // e.g., "2,350.00"

      // Remove commas and decimal part before parsing
      // const cleanedPrice = rawPrice.replace(/,/g, "").split(".")[0]; // "2350"

      // Convert to number
      // const price = parseFloat(cleanedPrice);

        const qty = removedProduct.quantity || 0;

        // Update total and quantity
        state.total -= rawPrice * qty;
        state.quantity -= 1;

        // Remove the product
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

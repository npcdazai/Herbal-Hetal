import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initailState = {
  products: [{ id: 1, text: "hello" }],
};

export const productSlice = createSlice({
  name: "product_Slice",
  initailState,
  reducers: {
    getProducts: (state, action) => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://dummyjson.com/products");
          const responseData = response.data;
          state.products.push(responseData);
        } catch (err) {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
        }
      };
      fetchProducts();
    },
    addToCart: (state, action) => {},
  },
});

export const { getProducts, addToCart } = productSlice.actions;

export default productSlice.reducer;

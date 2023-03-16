import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    sembako: [],
    alatTulis: [],
    orders: [],
  },
  reducers: {
    addSembako: (state, action) => {
      state.sembako.push(action.payload);
    },
    addAlatTulis: (state, action) => {
      state.alatTulis.push(action.payload);
    },
    addOrders: (state, action) => {
      let arr = state.orders;
      arr.push(action.payload);
      const uniqueArr = [...new Set(arr)];
      state.orders = uniqueArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSembako, addOrders, addAlatTulis } = productSlice.actions;

export default productSlice.reducer;

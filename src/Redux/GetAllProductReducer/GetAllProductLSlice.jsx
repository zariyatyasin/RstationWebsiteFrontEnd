import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProduct = createAsyncThunk(
  "Allproduct/fetchAllProduct",
  async ({ catId, filters }, { rejectWithValue }) => {
    try {
      const response = catId
        ? await axios.get(
            `http://localhost:5000/api/products/?category=${filters}`
          )
        : await axios.get(`http://localhost:5000/api/products/ `);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  AllProduct: [],
  isLoading: false,
  isError: null,
};
export const getAllProduct = createSlice({
  name: "AllProduct",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.AllProduct = action.payload;
      state.isError = null;
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default getAllProduct.reducer;

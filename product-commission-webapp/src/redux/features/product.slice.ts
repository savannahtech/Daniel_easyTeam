import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";
import {API_ENDPOINT} from "../../api/endpoints";

type InitialState = {
  loading: boolean;
  error: string | null;
  products: ProductState[];
  product: ProductState;
}

type ProductState = {
  id: string;
  product_name: string;
  product_type: string;
  product_price: number;
}
const initialState: InitialState = {
  loading: false,
  error: null,
  products: [],
  product: {} as ProductState
}

export const getProducts = createAsyncThunk("/products", async () => {
  try {
    const response = await axios.get<{data: object}>(API_ENDPOINT.products);
    return response.data?.data;
  } catch (e) {
    console.log(e);
  }
});

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload as ProductState[]
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  }
});

export const selectProducts = (state: RootState) => state.product.products;
export default product.reducer;
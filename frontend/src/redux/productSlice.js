import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false,
  error: null,
  filters: {
    category: null,
    minPrice: 0,
    maxPrice: 10000,
    search: '',
  },
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false
      state.products = action.payload
    },
    fetchProductsError: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    resetFilters: (state) => {
      state.filters = initialState.filters
    },
  },
})

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
  setFilters,
  resetFilters,
} = productSlice.actions

export default productSlice.reducer

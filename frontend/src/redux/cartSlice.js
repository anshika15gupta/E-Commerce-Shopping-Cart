import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
  loading: false,
  error: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.loading = true
      state.error = null
    },
    addToCartSuccess: (state, action) => {
      state.loading = false
      state.items = action.payload.items
      state.totalPrice = action.payload.totalPrice
      state.totalItems = action.payload.totalItems
    },
    addToCartError: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload)
    },
    updateCartItem: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
      state.totalItems = 0
    },
    getCartStart: (state) => {
      state.loading = true
    },
    getCartSuccess: (state, action) => {
      state.loading = false
      state.items = action.payload.items
      state.totalPrice = action.payload.totalPrice
      state.totalItems = action.payload.totalItems
    },
  },
})

export const {
  addToCartStart,
  addToCartSuccess,
  addToCartError,
  removeFromCart,
  updateCartItem,
  clearCart,
  getCartStart,
  getCartSuccess,
} = cartSlice.actions

export default cartSlice.reducer

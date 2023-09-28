import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productData:[],
  userInfo: null
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) =>
    {
        const item = state.productData.find(
          (item) => item.id === action.payload.id
        )
        if (item) {
          item.quantity += action.payload.quantity
        } else {
          state.productData.push(action.payload)
        }    
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = counterSlice.actions
export default counterSlice.reducer
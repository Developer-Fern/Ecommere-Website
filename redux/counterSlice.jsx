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
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    // =============== User Start here ==============
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    // =============== User End here ================
  },
})

// Action creators are generated for each case reducer function
export const { 
  addToCart,
  deleteItem,
  resetCart,
  increamentQuantity,
  decrementQuantity,
  addUser,
  removeUser
} = counterSlice.actions
export default counterSlice.reducer
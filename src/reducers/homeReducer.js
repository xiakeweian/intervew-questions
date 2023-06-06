import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
  data: [],
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    incremented: (state, payload) => {
      console.log(state, payload)
      state.value += 1
    },
    decremented: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { incremented, decremented, incrementByAmount } = homeSlice.actions
export const initState = (state) => state.home.value

export default homeSlice

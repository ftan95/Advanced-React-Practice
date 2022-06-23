import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, incrementNum: 1, decrementNum: 1};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter = state.counter + state.incrementNum;
        },
        decrement(state) {
            state.counter = state.counter - state.decrementNum;
        },
        setOption(state, action) {
            console.log(action.payload);
            state.counter = action.payload.stock;
            state.incrementNum = action.payload.inc;
            state.decrementNum = action.payload.dec;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
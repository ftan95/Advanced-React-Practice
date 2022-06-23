import { createSlice } from "@reduxjs/toolkit";

const initialLoadingState = { isLoading: false };
const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialLoadingState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        endLoading(state) {
            state.isLoading = false;
        }
    }
});

export const loadActions = loadingSlice.actions;
export default loadingSlice.reducer;
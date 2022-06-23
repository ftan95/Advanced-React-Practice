import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import loadReducer from "./load";

const store = configureStore({
    reducer: { counter: counterReducer, loading: loadReducer }
});

export default store;


// -------------------- Basic Redux ----------------------------
// import { createStore } from "redux";
// const initialState = {
//     counter: 0, 
//     incrementNum: 1, 
//     decrementNum: 1, 
//     isLoading: false
// };

// const counterReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'increment':
//             return {
//                 counter: state.counter + state.incrementNum,
//                 incrementNum: state.incrementNum,
//                 decrementNum: state.decrementNum,
//                 isLoading: state.isLoading
//             }
//         case 'decrement':
//             return {
//                 counter: state.counter - state.decrementNum,
//                 incrementNum: state.incrementNum,
//                 decrementNum: state.decrementNum,
//                 isLoading: state.isLoading
//             }
//         case 'startLoad':
//             return {
//                 counter: state.counter,
//                 incrementNum: state.incrementNum,
//                 decrementNum: state.decrementNum,
//                 isLoading: true
//             }
//         case 'endLoad':
//             return {
//                 counter: state.counter,
//                 incrementNum: state.incrementNum,
//                 decrementNum: state.decrementNum,
//                 isLoading: false
//             }
//         case 'setOption':
//             return {
//                 counter: action.stock,
//                 incrementNum: action.inc,
//                 decrementNum: action.dec,
//                 isLoading: state.isLoading
//             }
//         default:
//             return state
//     }
// };

// const store = createStore(counterReducer);

// export default store;
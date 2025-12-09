import { createSlice } from "@reduxjs/toolkit";


/**
 * SLICES
 *      contain your reducers and their actions
 *          in pure redux, no toolkit, the reducers and actions separated
 * 
 *      logic for state modifications
 * 
 *      createSlice
 *          - name: name of your reducer
 *          - initialState: object with the initial values for your state
 *          - reducers: object with your reducer functions
 */

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        countTwo: 2     // can have multiple pieces of state in this object
    },
    reducers: {
        increment: (state) => {
            // normally in react, you NEVER mutate your state directly
            // in Redux, you actually have to
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        set: (state, action) => {
            state.count = action.payload;
        }
    }
});

// exporting the reducer created by the slice
export default counterSlice.reducer;

// export all of your reducer actions
export const {increment, decrement, set} = counterSlice.actions;
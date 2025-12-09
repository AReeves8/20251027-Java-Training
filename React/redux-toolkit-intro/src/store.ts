import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';


/**
 * REDUX STORE
 *      handles the state for the entire application
 * 
 *      all of your reducers in one location
 */

const store = configureStore({
    reducer: {
        counter: counterReducer     // using the reducer from counterSlice
    }
});

// exporting store to be used by our app
export default store;

// get the TYPE of our store
export type AppStore = typeof store;

// getting the TYPE of our state
export type RootState = ReturnType<AppStore['getState']>
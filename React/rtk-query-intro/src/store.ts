import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./apis/movieApi";

const store = configureStore({
    reducer: {
        // reducerPath is basically the name of our reducer that is created by createApi
        [movieApi.reducerPath] : movieApi.reducer
    },


    /**
     * middleware
     *      between your api call and your server endpoint
     *          in a way, kinda similar Spring AOP. 
     *          
     *          often used for logging, routing, crash reports, etc.
     * 
     *      redux will be using it, even if we aren't doing much with it
     */
    middleware: (defaultMiddleware) => defaultMiddleware().concat(movieApi.middleware)  // concat on middleware from each Api you create
});

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>
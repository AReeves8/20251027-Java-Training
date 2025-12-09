import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { decrement, increment, set } from "../slices/counterSlice";
import { useRef } from "react";


const StoreCounter = () => {


    /**
     * REACT-REDUX HOOK: useSelector
     * 
     *      allow you to access a particular piece of state from your store
     * 
     *      take in the store object that was PROVIDED by the main.tsx
     * 
     *      can give you the entire store, or just a specific piece
     */
    const {count, countTwo} = useSelector((store : RootState) => store.counter)


    /**
     * REACT-REDUX HOOK: useDispatch
     *      return dispatch function of your reducers. 
     *          dispatch function lets you call your reducer actions
     */
    const dispatch = useDispatch();

    // you can type functions with angle brackets in typescript
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <h1>STORE COUNTER</h1>
            <h2>Count: {count}</h2>
            <h3>CountTwo: {countTwo}</h3>

            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            <input type="number" ref={inputRef} />
            <button onClick={() => dispatch(set(Number(inputRef.current?.value)))} >set</button>

        </>
    );
}

export default StoreCounter;
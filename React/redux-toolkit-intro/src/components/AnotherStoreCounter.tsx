import { useSelector } from "react-redux";
import type { RootState } from "../store";


const AnotherStoreCounter = () => {

    const {count, countTwo} = useSelector((store : RootState) => store.counter)

    return (
        <>
            <h1>ANOTHER STORE COUNTER</h1>
            <h2>Count: {count}</h2>
            <h3>CountTwo: {countTwo}</h3>
        </>
    );
}

export default AnotherStoreCounter;
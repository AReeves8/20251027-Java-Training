/**
 * ASYNC AND AWAIT
 *      alternate way to handle promises
 *          instead of .then(), we can use the keyword await
 *          instead of .catch(), you just need to wrap the function call in a try-catch block
 * 
 *      any async function, will always return a Promise
 *          whatever the function naturally returns is the "resolved" state
 *          any exceptions thrown during the execution are the "rejected" state
 */

async function myAsyncFunc() {
    return "This is an async function";
}


// async is only allowed at the top level OR inside of an async function
const msg = await myAsyncFunc();
console.log(msg);

// WONT WORK
// function myFunc() {              
//     const msg = await myAsyncFunc();
//     console.log(msg);
// }

async function asyncAwaitFunc() {

    // use try-catch blocks to handle exceptions and errors
    try {
        const msg = await myAsyncFunc();
        console.log(msg);
    } catch (error) {
        console.error(error);
    }    
}

asyncAwaitFunc();
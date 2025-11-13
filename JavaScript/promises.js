/**
 * PROMISES
 *      represent the eventual completion (success or failure) of some task
 * 
 *      designed as solution to nested callback functions
 *          create weird behavior in event loop: Pyramid of Doom or Callback Hell
 * 
 *      so rather than passing callback functions into other functions, you can instead just attach them to a Promise. 
 * 
 *      Promise States: 
 *          Pending - asynchronous task is still ongoing
 *          Resoloved - asynchronous task completed successfully
 *          Rejected - asynchronous task completed unsuccessfully (error ocurred)
 *          Settled - asynchronous task completed and callback was handled (good or bad)
 */

const orderFood = (order) => {

    return new Promise((resolve, reject) => {
        if(order === "Garlic Fried Rice") {
            reject("We are out of Garlic Fried Rice. Sorry!");
        }
        else {
            resolve(`Enjoy your ${order}!`);
        }
    });

}


// handle promises with .then(), .catch(), and .finally()
const promise = orderFood("Garlic Fried Rice");
promise
    .then(data => console.log(`Success! ${data}`))                  // only going to handle resolved state
    .catch(data => console.log(`Error :( - ${data}`))               // only handles rejected state
    .finally(() => console.log("I ALWAYS RUN!!"))                   // always runs after .then() or .catch()




// SIMULATE A NETWORK CALL

const makeNetworkRequest = (url, data) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(url === "www.bing.com") {
                reject({message: "We do not service Bing."});
            }
            else {
                resolve({message: `The request to ${url} was successful.`, data, status: 500});
            }
        }, 3000); 
    });
}


const networkPromise = makeNetworkRequest('www.google.com', {firstName : "Austin", favoriteColor : "Gray"});

networkPromise
    .then(response => {
        console.log("1st .then()");
        if(response.status === 200) {
            return Promise.resolve(response.data);
        }
        else {
            return Promise.reject("An error has ocurred!");
        }
    })
    .then(responseData => {
        console.log("2nd .then()");
        console.log(responseData);
    })
    .catch(err => console.error(err));
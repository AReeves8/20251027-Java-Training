/***
 * JE EVENT LOOP
 *      js's runtime model
 *          java has the top-down
 * 
 *      determines order in which subtasks are executed
 *          more like a queue or a series of queues
 * 
 *      microtasks vs macrotasks
 *          microtasks take priority over macrotasks
 * 
 *          promises - microtaks
 *          setTimeout and setInterval - macrotasks
 */


console.log("1");                                           // added execution stack (FIFO)
setTimeout(() => console.log("2"), 0)                       // added macrotask queue
setTimeout(() => console.log("3"), 0)                       // added macrotask queue
Promise.resolve("4").then(data => console.log(data));       // added microtask queue
console.log("5");                                           // added execution stack

/**
 * What will the order be?
 *      guess: 1, 2, 3, 5, 4
 *             4, 1, 5, 2, 3
 *             1, 4, 2, 3, 5
 *             4, 2, 3, 1, 5
 * 
 *      actual : 1, 5, 4, 2, 3
 * 
 *      general order: execution stack -> microtask queue -> macrotask queue
 */
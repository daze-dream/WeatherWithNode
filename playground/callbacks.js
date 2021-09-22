// A callback function is a function passed to another function, with the intent that it will be called later in execution

//setTimeout( () => {console.log('2 seconds')}, 2000)

//Let's try to create our own function that takes a callback

/** If the function itself was going to return data, without the need of a callback to get it,
 *      then you could remove the callback and simply assign it to a variable.
 */
const geocode = (address, callback) => {
    console.log('Standard synchronous function')
    const data = {
        latitude: 0,
        longitude: 0,
    }
    return data;
}

const data = geocode('Burma');
console.log(data);

/** With async programming, however, regular return paradigms break down. 
 *      For example, nesting a return in a nested setTimeout function means that it's only 
 *      returning from the setTimeout data, not the function itself. It would give back undefined.
 *      Reason being because of the callstack*/

 const geocode2 = (address, callback) => {
     console.log('Attempting async programming')
    setTimeout( () => {
        const data = {
            latitude: 0,
            longitude: 0,
        };
        console.log('async portion finished execution')
        return data;
    },
    2000)
    // this would return undefined.
    console.log('Attempt finished. What did I return? Undefined. setTimeout has not executed yet.')
}

const data2 = geocode2('Burma');
console.log(data2);

/** This leads to async with callbacks. */

const geocode3 = (address, callback) => {
    console.log('Async programming, now with callbacks')
   setTimeout( () => {
       const data = {
           latitude: 0,
           longitude: 0,
       };
       callback(data)
       console.log('async portion finished execution')
   },
   2000)
   // this would return undefined.
   console.log('Attempt finished. Still returned undefined, but the callback function will take care of what we wanted to happen')
}

geocode3('Burma', (data) => {
    console.log(data)
});
//console.log();
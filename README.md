# stubborn-promise

*A river cuts through rock, not because of its power, but because of its persistence.*

A promise that will **never** reject.

### Usage

    const StubbornPromise = require("stubborn-promise");

    let counter = 0;

    new StubbornPromise(function () {

      console.log("Attempt " + counter);

      return ++counter === 5 ? Promise.resolve(counter) : Promise.reject(null);
    }, 1000).then(count => {

      console.log("Resolved after " + count + " attempts.");
    });
    
### API

* `constructor(callback, delay)`:  
  `callback` must return the promise that you want to resolve at all costs;  
  `delay` is time between retries, measured in ms.

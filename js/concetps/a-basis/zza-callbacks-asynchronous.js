/*
"I will finish later!"

Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
In the real world, callbacks are most often used with asynchronous functions.
A typical example is JavaScript setTimeout().

---
Waiting for a Timeout

setTimeout(() => myFunction('called with setTimeout'), 3000);

function myFunction(... params) {
  console.log('Test-' + params[0])
}

myFunction('called without setTimeout')


---
Waiting for Intervals:
When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log('lala')
}


---
Callbacks Better Alternatives

With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in paralell.

But, asynchronus programmes are difficult to write and difficult to debug.

Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.

*/
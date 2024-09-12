/*
"I Promise a Result!"

"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code

---
JavaScript Promise Object
A JavaScript Promise object contains both the producing code and calls to the consuming code:

---
syntax
*/
let myPromise1 = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

// When the producing code obtains the result, it should call one of the two callbacks:

// Result	    Call
// Success	    myResolve(result value)
// Error	    myReject(error object)

// Promise Object Properties

// A JavaScript Promise object can be:
//   Pending
//   Fulfilled
//   Rejected

/*
The Promise object supports two properties: state and result.
While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.

myPromise.state	        myPromise.result
"pending"	            undefined
"fulfilled"	            a result value
"rejected"	            an error object

You cannot access the Promise properties state and result.
You must use a Promise method to handle promises.

---
Promise How To
Here is how to use a Promise:
*/
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

// Promise.then() takes two arguments, a callback for success and another for failure.
// Both are optional, so you can add a callback for success or failure only.

function myDisplayer(some) {
  console.log(some)
}

let myPromise2 = new Promise(function(myResolve, myReject) {
  let x = 0;
  // The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise2.then(myValue => myDisplayer(myValue), myError => myDisplayer(myError));


// myPromise.then(
//   function catr1(myValue) {myDisplayer(myValue);},
//   function catr2(myError) {myDisplayer(myError);}
// );

// myPromise.then(
//   function (myValue) {myDisplayer(myValue);},
//   function (myError) {myDisplayer(myError);}
// );



let myPromise3 = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise3.then(function(value) {
  console.log(value)
});


// Waiting for a file  -- USING CALLBACK
function myDisplayer(some) {
  // document.getElementById("demo").innerHTML = some;
  console.log(some)
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.open('GET', "mycar.html");
  req.send();
}

getFile(myDisplayer); 


// Waiting for a file  -- USING PROMISE

function myDisplayer(some) {
  // document.getElementById("demo").innerHTML = some;
  console.log(some)
}

let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
/*
Name              Description  
at()              Returns an indexed element of an array  
concat()          Joins arrays and returns an array with the joined arrays      
constructor       Returns the function that created the Array object's prototype          
copyWithin()      Copies array elements within the array, to and from specified positions          
entries()         Returns a key/value pair Array Iteration Object      
every()           Checks if every element in an array pass a test  
fill()            Fill the elements in an array with a static value  
filter()          Creates a new array with every element in an array that pass a test      
find()            Returns the value of the first element in an array that pass a test  
findIndex()       Returns the index of the first element in an array that pass a test      
flat()            Concatenates sub-array elements  
flatMap()         Maps all array elements and creates a new flat array      
forEach()         Calls a function for each array element      
from()            Creates an array from an object  
includes()        Check if an array contains the specified element      
indexOf()         Search the array for an element and returns its position      
isArray()         Checks whether an object is an array      
join()            Joins all elements of an array into a string  
keys()            Returns a Array Iteration Object, containing the keys of the original array  
lastIndexOf()     Search the array for an element, starting at the end, and returns its position          
length            Sets or returns the number of elements in an array  
map()             Creates a new array with the result of calling a function for each array element  
pop()             Removes the last element of an array, and returns that element  
prototype         Allows you to add properties and methods to an Array object      
push()            Adds new elements to the end of an array, and returns the new length  
reduce()          Reduce the values of an array to a single value (going left-to-right)      
reduceRight()     Reduce the values of an array to a single value (going right-to-left)          
reverse()         Reverses the order of the elements in an array      
shift()           Removes the first element of an array, and returns that element  
slice()           Selects a part of an array, and returns the new array  
some()            Checks if any of the elements in an array pass a test  
sort()            Sorts the elements of an array  
splice()          Adds/Removes elements from an array      
toString()        Converts an array to a string, and returns the result      
unshift()         Adds new elements to the beginning of an array, and returns the new length      
valueOf()         Returns the primitive value of an array      


----------------------

JavaScript Arrays
An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"];
Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.

Syntax:

const array_name = [item1, item2, ...];      
It is a common practice to declare arrays with the const keyword.

Learn more about const with arrays in the chapter: JS Array Const.

Example
const cars = ["Saab", "Volvo", "BMW"];
Spaces and line breaks are not important. A declaration can span multiple lines:

Example
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
You can also create an array, and then provide the elements:

Example
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
Using the JavaScript Keyword new
The following example also creates an Array, and assigns values to it:

Example
const cars = new Array("Saab", "Volvo", "BMW");
The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method.

ADVERTISEMENT

Accessing Array Elements
You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
Note: Array indexes start with 0.

[0] is the first element. [1] is the second element.

Changing an Array Element
This statement changes the value of the first element in cars:

cars[0] = "Opel";
Example
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
Converting an Array to a String
The JavaScript method toString() converts an array to a string of (comma separated) array values.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Result:

Banana,Orange,Apple,Mango
Access the Full Array
With JavaScript, the full array can be accessed by referring to the array name:

Example
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:

Array:
const person = ["John", "Doe", 46];
Objects use names to access its "members". In this example, person.firstName returns John:

Object:
const person = {firstName:"John", lastName:"Doe", age:46};
Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods:

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
Array methods are covered in the next chapters.

The length Property
The length property of an array returns the length of an array (the number of array elements).

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
The length property is always one more than the highest array index.

Accessing the First Array Element
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
Accessing the Last Array Element
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
Looping Array Elements
One way to loop through an array, is using a for loop:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
You can also use the Array.forEach() function:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
Adding Array Elements
The easiest way to add a new element to an array is using the push() method:

Example
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
New element can also be added to an array using the length property:

Example
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
WARNING !
Adding elements with high indexes can create undefined "holes" in an array:

Example
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  

Example
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.

 Example:
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
JavaScript new Array()
JavaScript has a built-in array constructor new Array().

But you can safely use [] instead.

These two different statements both create a new empty array named points:

const points = new Array();
const points = [];
These two different statements both create a new array containing 6 numbers:

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
The new keyword can produce some unexpected results:

// Create an array with three elements:
const points = new Array(40, 100, 1);
// Create an array with two elements:
const points = new Array(40, 100);
// Create an array with one element ???
const points = new Array(40);  
A Common Error
const points = [40];
is not the same as:

const points = new Array(40);
// Create an array with one element:
const points = [40];
// Create an array with 40 undefined elements:
const points = new Array(40);  
How to Recognize an Array
A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator typeof returns "object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
The typeof operator returns object because a JavaScript array is an object.

Solution 1:
To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

Array.isArray(fruits);
Solution 2:
The instanceof operator returns true if an object is created by a given constructor:

const fruits = ["Banana", "Orange", "Apple"];

fruits instanceof Array;


-----------------------------
JavaScript Array length
The length property returns the length (size) of an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
JavaScript Array toString()
The JavaScript method toString() converts an array to a string of (comma separated) array values.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Result:

Banana,Orange,Apple,Mango
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
Result:

Banana * Orange * Apple * Mango
Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.

ADVERTISEMENT

JavaScript Array pop()
The pop() method removes the last element from an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
The pop() method returns the value that was "popped out":

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
JavaScript Array push()
The push() method adds a new element to an array (at the end):

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
The push() method returns the new array length:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last.

JavaScript Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
The shift() method returns the value that was "shifted out":

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
JavaScript Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
The unshift() method returns the new array length:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
Changing Elements
Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
JavaScript Array length
The length property provides an easy way to append a new element to an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
JavaScript Array delete()
Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays:

Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments:

Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
The concat() method can also take strings as arguments:

Example (Merging an Array with Values)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.

The flat() method creates a new array with sub-array elements concatenated to a specified depth.

Example
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
Browser Support
JavaScript Array flat() is supported in all modern browsers since January 2020:

Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

JavaScript Array splice()
The splice() method can be used to add new items to an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.

JavaScript Array slice()
The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.

This example slices out a part of an array starting from array element 3 ("Apple"):

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
Automatic toString()
JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
Note
All JavaScript objects have a toString() method.

Finding Max and Min Values in an Array
There are no built-in functions for finding the highest or lowest value in a JavaScript array.

You will learn how you solve this problem in the next chapter of this tutorial.

Sorting Arrays
Sorting arrays are covered in the next chapter of this tutorial.


-----------------------------

JavaScript Sorting Arrays
Sorting an Array
The sort() method sorts an array alphabetically:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
Reversing an Array
The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
Use the same trick to sort an array descending:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
ADVERTISEMENT

The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>
Sorting an Array in Random Order
Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});

The Fisher Yates Method
The above example, array.sort(), is not accurate. It will favor some numbers over the others.

The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

In JavaScript the method can be translated to this:

Example
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

Find the Highest (or Lowest) Array Value
There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

Sorting ascending:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
Sorting descending:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

Using Math.max() on an Array
You can use Math.max.apply to find the highest number in an array:

Example
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

Using Math.min() on an Array
You can use Math.min.apply to find the lowest number in an array:

Example
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

My Min / Max JavaScript Methods
The fastest solution is to use a "home made" method.

This function loops through an array comparing each value with the highest value found:

Example (Find Max)
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

This function loops through an array comparing each value with the lowest value found:

Example (Find Min)
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

Sorting Object Arrays
JavaScript arrays often contain objects:

Example
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
Even if objects have properties of different data types, the sort() method can be used to sort the array.

The solution is to write a compare function to compare the property values:

Example
cars.sort(function(a, b){return a.year - b.year});
Comparing string properties is a little more complex:

Example
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
Stable Array sort()
ES2019 revised the Array sort() method.

Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.

After ES2019, browsers must use a stable sorting algorithm:

When sorting elements on a value, the elements must keep their relative position to other elements with the same value.

Example
const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];
In the example above, when sorting on price, the result is not allowed to come out with the names in an other relative position like this:

X01 100
X03 100
X00 100
X03 100
X05 110
X04 110
X06 110
X07 110

*/
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// Essential Map Methods
// Method	        Description
// new Map()	    Creates a new Map
// set()	        Sets the value for a key in a Map
// get()	        Gets the value for a key in a Map
// delete()	    Removes a Map element specified by the key
// has()	        Returns true if a key exists in a Map
// forEach()	    Calls a function for each key/value pair in a Map
// entries()	    Returns an iterator with the [key, value] pairs in a Map
// Property	    Description
// size	        Returns the number of elements in a Map


// How to Create a Map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()
// The new Map() Method
// You can create a Map by passing an Array to the new Map() constructor:

// Example
// Create a Map
const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// The set() Method
// You can add elements to a Map with the set() method:
// Example
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// The set() method can also be used to change existing Map values:
// Example
// fruits.set("apples", 200);
// The get() Method
// The get() method gets the value of a key in a Map:
// Example
fruits.get("apples");    // Returns 500

// ADVERTISEMENT
// The size Property
// The size property returns the number of elements in a Map:
// Example
fruits.size;

// The delete() Method
// The delete() method removes a Map element:
// Example
fruits.delete("apples");

// The has() Method
// The has() method returns true if a key exists in a Map:
// Example

fruits.has("apples");

// Try This:

fruits.delete("apples");
fruits.has("apples");

// JavaScript Objects vs Maps
// Differences between JavaScript Objects and Maps:
// Object	Map
// Iterable	Not directly iterable	Directly iterable
// Size	Do not have a size property	Have a size property
// Key Types	Keys must be Strings (or Symbols)	Keys can be any datatype
// Key Order	Keys are not well ordered	Keys are ordered by insertion
// Defaults	Have default keys	Do not have default keys
// The forEach() Method
// The forEach() method calls a function for each key/value pair in a Map:
// Example

// List all entries
let text2 = "";
fruits.forEach (function(value, key) {
  text2 += key + ' = ' + value;
})

// The entries() Method
// The entries() method returns an iterator object with the [key, values] in a Map:
// Example
// List all entries

let text = "";
for (const x of fruits.entries()) {
  text += x;
}


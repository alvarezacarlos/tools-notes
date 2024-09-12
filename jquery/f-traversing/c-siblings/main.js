/*
siblings() -  returns all sibling elements of the selected element.
next() - returns the next sibling element of the selected element.
nextAll() - returns all next sibling elements of the selected element.
nextUntil() - returns all next sibling elements between two given arguments.
prev()
prevAll()
prevUntil()
*/

/*
$(document).ready(function(){
  $("h2").siblings();
});


//optional parameter to filter the search for siblings.
$(document).ready(function(){
  $("h2").siblings("p");
});

$(document).ready(function(){
  $("h2").next();
});

$(document).ready(function(){
  $("h2").nextAll();
});

$(document).ready(function(){
  $("h2").nextUntil("h6");
});
*/

/**The prev(), prevAll() and prevUntil() methods work just like the methods above but with reverse functionality: they return previous sibling elements (traverse backwards along sibling elements in the DOM tree, instead of forward). */
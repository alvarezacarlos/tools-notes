/*
first() - returns the first element of the specified elements.
last() - returns the last element of the specified elements.
eq() - returns an element with a specific index number of the selected elements.
filter() - lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned.
not() - returns all elements that do not match the criteria.
*/

$(document).ready(function(){
  $("div").first();
});

$(document).ready(function(){
  $("div").last();
});

$(document).ready(function(){
  $("p").eq(1); //The index numbers start at 0, so the first element will have the index number 0 and not 1.
});

$(document).ready(function(){
  $("p").filter(".intro");
});
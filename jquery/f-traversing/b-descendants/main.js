/*
children() - returns all direct children of the selected element.
find() - returns descendant elements of the selected element, all the way down to the last descendant.
 */

/*

$(document).ready(function(){
  $("div").children();
});

// optional parameter to filter the search for children.
$(document).ready(function(){
  $("div").children("p.first");
});


$(document).ready(function(){
  $("div").find("span");
});

$(document).ready(function(){
  $("div").find("*");  //eturns all descendants of <div>: 
});

*/
/*
parent() - returns the direct parent element of the selected element.
parents() - returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).
parentsUntil() - returns all ancestor elements between two given arguments.
*/

/*
$(document).ready(function(){
  $("span").parent();
});

$(document).ready(function(){
  $("span").parents();
});

//optional parameter to filter the search for ancestors.
$(document).ready(function(){
  $("span").parents("ul");
});

// returns all ancestor elements between a <span> and a <div>
$(document).ready(function(){
  $("span").parentsUntil("div");
});
*/
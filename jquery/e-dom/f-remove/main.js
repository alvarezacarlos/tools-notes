/*
remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element
*/

$(document).ready(function () {
  $("button").click(function () {
    $("#div1").remove();
  });
});

/*
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").empty();
  });
});
 */

//filter the elements to be removed
// $("p").remove(".test");
// $("p").remove(".test, .demo");
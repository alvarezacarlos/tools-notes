$(document).ready(function () {
  $("button").click(function () {
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
  });
});

//The attr() method also allows you to set multiple attributes at the same time.
/*
$("button").click(function(){
  $("#w3s").attr({
    "href" : "https://www.w3schools.com/jquery/",
    "title" : "W3Schools jQuery Tutorial"
  });
});
*/

//The following example demonstrates attr() with a callback function:
/*
$("button").click(function(){
  $("#w3s").attr("href", function(i, origValue){
    return origValue + "/jquery/";
  });
});
 */

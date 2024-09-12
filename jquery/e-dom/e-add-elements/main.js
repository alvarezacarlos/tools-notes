/*
append() - Inserts content at the end of the selected elements
prepend() - Inserts content at the beginning of the selected elements
after() - Inserts content after the selected elements
before() - Inserts content before the selected elements
*/

$(document).ready(function () {
  $("#btn1").click(function () {
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function () {
    $("ol").append("<li>Appended item</li>");
    $("ol").prepend("<li>Pre pend item</li>");
    $("ol").before("<div>Div before</div>");
    $("ol").after("<div>Div after</div>");
  });
});

//Add Several New Elements
/*
function appendText() {
  var txt1 = "<p>Text.</p>";               // Create element with HTML 
  var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements
}
 */

/*
function afterText() {
  var txt1 = "<b>I </b>";                    // Create element with HTML 
  var txt2 = $("<i></i>").text("love ");     // Create with jQuery
  var txt3 = document.createElement("b");    // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
}
 */


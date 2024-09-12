/*
text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields
 */

$(document).ready(function () {
  $("#btn1").click(function () {
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function () {
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function () {
    $("#test3").val("Dolly Duck");
  });
});

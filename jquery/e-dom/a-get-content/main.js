$(document).ready(function(){
  $("#btn1").click(function(){
    console.log($("#test").text());
  });
  $("#btn2").click(function(){
    console.log($("#test").html());
  });
  $("#formButton").click(function(){
    console.log($("#formInput").val());
  });
});

/*
text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields
 */
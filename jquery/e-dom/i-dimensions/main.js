/*
width()
height()
innerWidth()
innerHeight()
outerWidth()
outerHeight()
 */

/*
The width() method sets or returns the width of an element (excludes padding, border and margin).
The height() method sets or returns the height of an element (excludes padding, border and margin).
The innerWidth() method returns the width of an element (includes padding).
The innerHeight() method returns the height of an element (includes padding).
The outerWidth() method returns the width of an element (includes padding and border).
The outerHeight() method returns the height of an element (includes padding and border).
The outerWidth(true) method returns the width of an element (includes padding, border, and margin).
The outerHeight(true) method returns the height of an element (includes padding, border, and margin).
*/

/*jQuery width() and height() Methods
 
$("button").click(function(){
  var txt = "";
  txt += "Width: " + $("#div1").width() + "</br>";
  txt += "Height: " + $("#div1").height();
  $("#div1").html(txt);
});
 */

/* jQuery innerWidth() and innerHeight() 

  $("button").click(function(){
    var txt = "";
    txt += "Inner width: " + $("#div1").innerWidth() + "</br>";
    txt += "Inner height: " + $("#div1").innerHeight();
    $("#div1").html(txt);
  });

*/


/*jQuery More width() and height()
The following example returns the width and height of the document (the HTML document) and window (the browser viewport):

$("button").click(function(){
  var txt = "";
  txt += "Document width/height: " + $(document).width();
  txt += "x" + $(document).height() + "\n";
  txt += "Window width/height: " + $(window).width();
  txt += "x" + $(window).height();
  alert(txt);
});

 */

/* The following example sets the width and height of a specified <div> element:

$("button").click(function(){
  $("#div1").width(500).height(500);
});
*/
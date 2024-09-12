// AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.
// AJAX = Asynchronous JavaScript and XML.

// AJAX is about loading data in the background and display it on the webpage, without reloading the whole page.

/*
Without jQuery, AJAX coding can be a bit tricky!

Writing regular AJAX code can be a bit tricky, because different browsers have different syntax for AJAX implementation. This means that you will have to write extra code to test for different browsers. However, the jQuery team has taken care of this for us, so that we can write AJAX functionality with only one single line of code.
 */



// load() - loads data from a server and puts the returned data into the selected element.
// $(selector).load(URL,data,callback);
/*
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt");
  });
});
 */

/**
It is also possible to add a jQuery selector to the URL parameter.
The following example loads the content of the element with id="p1", inside the file "demo_test.txt", into a specific <div> element:
$("#div1").load("demo_test.txt #p1");
 */

/*The optional callback parameter specifies a callback function to run when the load() method is completed. The callback function can have different parameters:
  responseTxt - contains the resulting content if the call succeeds
  statusTxt - contains the status of the call
  xhr - contains the XMLHttpRequest object
  
  $("button").click(function(){
    $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });
 */
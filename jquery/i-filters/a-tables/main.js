// Use jQuery to filter/search for specific elements.

// Perform a case-insensitive search for items in a table:

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

/*
Example explained: We use jQuery to loop through each table rows to check if there are any text values that matches the value of the input field. The toggle() method hides the row (display:none) that does not match the search. We use the toLowerCase() DOM method to convert the text to lower case, which makes the search case insensitive (allows "john", "John", and even "JOHN" on search).
*/
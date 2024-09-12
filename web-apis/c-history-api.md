The Web History API provides easy methods to access the windows.history object.
The window.history object contains the URLs (Web Sites) visited by the user.

--
back() Method
The back() method loads the previous URL in the windows.history list.
It is the same as clicking the "back arrow" in your browser.

<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script>


--
go()

The go() method loads a specific URL from the history list:
<button onclick="myFunction()">Go Back 2 Pages</button>

<script>
function myFunction() {
  window.history.go(-2);
}
</script>


--
History Object Properties
Property	
length	    Returns the number of URLs in the history list

Method
back()	    Loads the previous URL in the history list
forward()	Loads the next URL in the history list
go()	    Loads a specific URL from the history list



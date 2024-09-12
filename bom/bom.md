BOM: Browser Object Model
It Allows JavaScript to "talk to" the browser.

There are no official standards for the Browser Object Model (BOM).

Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

----
window
    screen
    location
    history
    navigator
    popup alert
timing
cookies

----
window
the window object
represents the browser window

Global variables are properties of the window object.
Global functions are methods of the window object.
Even the document object (of the HTML DOM) is a property of the window object:

example:
    window.document.getElementById("header");
    is the same as:
    document.getElementById("header");

--
does the dom belongs to the bom?
Yes, the DOM (Document Object Model) is a concept that is part of the BOM (Browser Object Model) in the context of web development.

The Browser Object Model (BOM) represents various objects provided by web browsers to interact with the browser itself. This includes objects like window, location, navigator, history, and more. These objects provide control over browser behavior, navigation, and other browser-related functionalities.

The Document Object Model (DOM) is a subset of the BOM. It specifically deals with representing the structure of HTML or XML documents as a tree of objects. Each element in an HTML or XML document corresponds to an object in the DOM tree. The DOM provides methods and properties for manipulating and interacting with these objects, allowing developers to dynamically change the content, structure, and style of web pages.

In summary, while both the BOM and the DOM are concepts related to web development, the DOM is a subset of the BOM that specifically focuses on representing and manipulating the structure of documents within a web browser.


--
does the dom specifically belong to the window object since we access the document as window.document ?

Yes, that's correct. In most web browsers, the DOM is implemented as part of the window object. When you access the document object as window.document, you are actually accessing a property of the window object.

In the context of the Browser Object Model (BOM), the window object represents the global window of the browser, and it provides access to various properties and methods that allow you to interact with the browser and the document currently loaded in it. One of these properties is the document property, which refers to the DOM representation of the HTML document being displayed in the browser window.

So, when you use window.document, you're accessing the DOM of the currently loaded document through the window object. This is a common practice in web development to manipulate and interact with the content of web pages dynamically.



--
Window Size
Two properties can be used to determine the size of the browser window.
Both properties return the sizes in pixels:
    window.innerHeight - the inner height of the browser window (in pixels)
    window.innerWidth - the inner width of the browser window (in pixels)
    
    Note: The browser window (the browser viewport) is NOT including toolbars and scrollbars.

    let w = window.innerWidth;
    let h = window.innerHeight;

--
Other Window Methods
Some other methods:

window.open() - open a new window
window.close() - close the current window
window.moveTo() - move the current window
window.resizeTo() - resize the current window


----
window.screen
The window.screen object contains information about the user's screen.

--
Properties
    screen.width                returns the width of the visitor's screen in pixels.
    screen.height               returns the height of the visitor's screen in pixels.
    screen.availWidth           returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
    screen.availHeight          returns the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
    screen.colorDepth           Display the color depth of the screen in bits:
    screen.pixelDepth           The screen.pixelDepth property returns the pixel depth of the screen.

    Note: For modern computers, Color Depth and Pixel Depth are equal.

----
window.location
The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

Properties
    window.location.href           returns the href (URL) of the current page
    window.location.hostname       returns the domain name of the web host
    window.location.pathname       returns the path and filename of the current page
    window.location.protocol       returns the web protocol used (http: or https:)
    window.location.assign()       loads a new document

----
window.history
The window.history object contains the browsers history.
To protect the privacy of the users, there are limitations to how JavaScript can access this object.

-- 
Some methods:
    history.back()          same as clicking back in the browser
    history.forward()       same as clicking forward in the browser

--
back
    <html>
    <head>
    <script>
    function goBack() {
    window.history.back()
    }
    </script>
    </head>
    <body>

    <input type="button" value="Back" onclick="goBack()">

    </body>
    </html>

--
forward
    <html>
    <head>
    <script>
    function goForward() {
    window.history.forward()
    }
    </script>
    </head>
    <body>

    <input type="button" value="Forward" onclick="goForward()">

    </body>
    </html>

----
window.navigator
he window.navigator object contains information about the visitor's browser.

properties:
    navigator.cookieEnabled
    navigator.appCodeName
    navigator.platform

--
Browser Cookies
The cookieEnabled property returns true if cookies are enabled, otherwise false:
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>

--
Browser Application Name
The appName property returns the application name of the browser:
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
</script>

Note: This property is removed (deprecated) in the latest web standard. Most browsers (IE11, Chrome, Firefox, Safari) returns Netscape as appName.

--
Browser Application Code Name
The appCodeName property returns the application code name of the browser:

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
</script>

Note: This property is removed (deprecated) in the latest web standard. Most browsers (IE11, Chrome, Firefox, Safari, Opera) returns Mozilla as appCodeName.

--
The Browser Engine
The product property returns the product name of the browser engine:

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
</script>

Warning: This property is removed (deprecated) in the latest web standard. Most browsers returns Gecko as product.

--
The Browser Version
The appVersion property returns version information about the browser:

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.appVersion;
</script>

--
The Browser Agent

The userAgent property returns the user-agent header sent by the browser to the server:

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.userAgent;
</script>


Warning
The information from the navigator object can often be misleading.
The navigator object should not be used to detect browser versions because:
    Different browsers can use the same name
    The navigator data can be changed by the browser owner
    Some browsers misidentify themselves to bypass site tests
    Browsers cannot report new operating systems, released later than the browser

--
The Browser Platform
The platform property returns the browser platform (operating system):

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.platform;
</script>

--
The Browser Language
The language property returns the browser's language:

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.language;
</script>

--
Is The Browser Online?
The onLine property returns true if the browser is online:
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.onLine;
</script>

--
Is Java Enabled?
The javaEnabled() method returns true if Java is enabled:

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>


----
window.alert()
There are has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

-- alert
Alert Box
An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

Syntax
window.alert("sometext");
The window.alert() method can be written without the window prefix.

Example
alert("I am an alert box!");

-- confirm
Confirm Box
A confirm box is often used if you want the user to verify or accept something.

When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

Syntax
window.confirm("sometext");
The window.confirm() method can be written without the window prefix.

Example
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

--
Prompt Box
A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

Syntax
window.prompt("sometext","defaultText");
The window.prompt() method can be written without the window prefix.

Example
let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}


--
Line Breaks
To display line breaks inside a popup box, use a back-slash followed by the character n.

Example
alert("Hello\nHow are you?");


----
Timing Events
JavaScript Timing Events

JavaScript can be executed in time-intervals.

This is called timing events.

--
Timing Events
The window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.

--
The setTimeout() Method

window.setTimeout(function, milliseconds);
The window.setTimeout() method can be written without the window prefix.

The first parameter is a function to be executed.

The second parameter indicates the number of milliseconds before execution.

-- example
Click a button. Wait 3 seconds, and the page will alert "Hello":

<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>


--
How to Stop the Execution?
The clearTimeout() method stops the execution of the function specified in setTimeout().

window.clearTimeout(timeoutVariable)
The window.clearTimeout() method can be written without the window prefix.

The clearTimeout() method uses the variable returned from setTimeout():

myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);
If the function has not already been executed, you can stop the execution by calling the clearTimeout() method:

Example
Same example as above, but with an added "Stop" button:

<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>

<button onclick="clearTimeout(myVar)">Stop it</button>

--
The setInterval() Method
The setInterval() method repeats a given function at every given time-interval.

window.setInterval(function, milliseconds);
The window.setInterval() method can be written without the window prefix.

The first parameter is the function to be executed.

The second parameter indicates the length of the time-interval between each execution.

This example executes a function called "myTimer" once every second (like a digital watch).

Example
Display the current time:

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


--
How to Stop the Execution?
The clearInterval() method stops the executions of the function specified in the setInterval() method.

window.clearInterval(timerVariable)
The window.clearInterval() method can be written without the window prefix.

The clearInterval() method uses the variable returned from setInterval():

let myVar = setInterval(function, milliseconds);
clearInterval(myVar);
Example
Same example as above, but we have added a "Stop time" button:

<p id="demo"></p>

<button onclick="clearInterval(myVar)">Stop time</button>

<script>
let myVar = setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>

----
Summary
Browser Object Model (BOM): The BOM is a set of objects provided by web browsers to allow interaction with the browser window and its various components. It includes objects like window, location, navigator, history, and more. The window object is the top-level object in the BOM, and it provides properties and methods for controlling the browser itself.

Document Object Model (DOM): The DOM is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects. Each element in the document corresponds to a node in the DOM tree. The document object is the top-level object in the DOM, and it provides methods and properties to access, modify, and manipulate the content and structure of web documents.

Now, regarding your question about the relationship between the DOM and the window object:

The window object, as part of the BOM, is the global object in a browser's JavaScript environment. It provides access to properties and methods related to the browser window itself.
The document object, as part of the DOM, represents the entire HTML or XML document loaded in the browser. The document object is a property of the window object, and it provides methods and properties for interacting with the content of the document.
When you access the document object using window.document, you're essentially accessing the DOM through the window object provided by the BOM. So, while the document object is a key part of the DOM, it is accessible as a property of the window object from the BOM.

In summary, the DOM represents the structure and content of web documents, and the window object from the BOM provides access to the document object and other browser-related properties and methods.


----
clock created with timing event

<!DOCTYPE html>
<html>

<body onload="startTime()">

<h2>JavaScript Clock</h2>

<div id="txt"></div>

<script>
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
</script>

</body>
</html>

----
JavaScript Cookies

Cookies let you store user information in web pages.

What are Cookies?
Cookies are data, stored in small text files, on your computer.

When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

Cookies were invented to solve the problem "how to remember information about the user":

When a user visits a web page, his/her name can be stored in a cookie.
Next time the user visits the page, the cookie "remembers" his/her name.
Cookies are saved in name-value pairs like:

username = John Doe
When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

None of the examples below will work if your browser has local cookies support turned off.



--
Create a Cookie with JavaScript

JavaScript can create, read, and delete cookies with the document.cookie property.
When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

Cookies were invented to solve the problem "how to remember information about the user":
    When a user visits a web page, his/her name can be stored in a cookie.
    Next time the user visits the page, the cookie "remembers" his/her name.
    Cookies are saved in name-value pairs like:


When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.
Note: None of the examples below will work if your browser has local cookies suppo


--
create
Create a Cookie with JavaScript

    --
    JavaScript can create, read, and delete cookies with the document.cookie property. With JavaScript, a cookie can be created like this:
    document.cookie = "username=John Doe";

    --
    You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

    --
    With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

--
read
Read a Cookie with JavaScript
With JavaScript, cookies can be read like this:
let x = document.cookie;
document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;

--
update
Change a Cookie with JavaScript
With JavaScript, you can change a cookie the same way as you create it:
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
The old cookie is overwritten.

-- delete
Deleting a cookie is very simple.
You don't have to specify a cookie value when you delete a cookie.
Just set the expires parameter to a past date:
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


You should define the cookie path to ensure that you delete the right cookie.
Some browsers will not let you delete a cookie if you don't specify the path.


--
The Cookie String
The document.cookie property looks like a normal text string. But it is not.
Even if you write a whole cookie string to document.cookie, when you read it out again, you can only see the ame-value pair of it.
If you set a new cookie, older cookies are not overwritten. The new cookie is added to document.cookie, so if you read document.cookie again you will get something like:
    cookie1 = value; cookie2 = value;
    Display All Cookies  Create Cookie 1  Create Cookie 2 Delete Cookie 1  Delete Cookie 2
    If you want to find the value of one specified cookie, you must write a JavaScript function that searches for the cookie value in the cookie string.

--
JavaScript Cookie Example
In the example to follow, we will create a cookie that stores the name of a visitor.
The first time a visitor arrives to the web page, he/she will be asked to fill in his/her name. The name is then stored in a cookie.
The next time the visitor arrives at the same page, he/she will get a welcome message.
For the example we will create 3 JavaScript functions:
    A function to set a cookie value
    A function to get a cookie value
    A function to check a cookie value

    --
    A Function to Set a Cookie

    First, we create a function that stores the name of the visitor in a cookie variable:

    Example
    function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    
    Example explained:
    The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue), and the number of days until the cookie should expire (exdays).

    The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.

    --
    A Function to Get a Cookie
    Then, we create a function that returns the value of a specified cookie:

    Example
    function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }

    
    Function explained:
    Take the cookiename as parameter (cname).
    Create a variable (name) with the text to search for (cname + "=").
    Decode the cookie string, to handle cookies with special characters, e.g. '$'
    Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).
    Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).
    If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).
    If the cookie is not found, return "".

    --
    A Function to Check a Cookie
    Last, we create the function that checks if a cookie is set.
    If the cookie is set it will display a greeting.
    If the cookie is not set, it will display a prompt box, asking for the name of the user, and stores the username cookie for 365 days, by calling the setCookie function:

    Example
    function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
    alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
        setCookie("username", username, 365);
        }
    }
    }


    --
    All Together Now
    function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }

    function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
        setCookie("username", user, 365);
        }
    }
    }

    The example above runs the checkCookie() function when the page loads.
        
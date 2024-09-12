The Fetch API interface allows web browser to make HTTP requests to web servers.
No need for XMLHttpRequest anymore.


A Fetch API Example
The example below fetches a file and displays the content:

--
Example
    fetch(file)
    .then(x => x.text())
    .then(y => myDisplay(y));    
Since Fetch is based on async and await, the example above might be easier to understand like this:

--
Example
    async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
    }
Or even better: Use understandable names instead of x and y:

--
Example
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}
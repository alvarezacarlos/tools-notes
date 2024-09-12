/*
The For Loop
The for statement creates a loop with 3 optional expressions:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.

Example
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}


---
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}

---

let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
*/
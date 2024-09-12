const citas = [
  "Et officia voluptate enim proident Lorem aliqua fugiat excepteur commodo.",
  "Fugiat nulla veniam elit aliqua reprehenderit magna quis dolor.",
  "Sunt irure pariatur aliqua magna nostrud laborum elit elit.",
  "Do sint eu incididunt laboris anim.",
  "Nulla reprehenderit laborum cupidatat incididunt aliquip mollit aliqua nostrud cupidatat.",
  "Nulla eiusmod cillum do amet excepteur irure irure fugiat consectetur duis consectetur proident ad.",
  "Reprehenderit deserunt adipisicing consequat enim reprehenderit aliquip incididunt excepteur dolore eiusmod.",
];

const myButton = document.getElementById("myB");

const generateAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

myButton.addEventListener("click", () => {
  let indexAleatorio = generateAleatorio(0, citas.length)
  const myParagraph = document.getElementById("myP");
  myParagraph.textContent = citas[indexAleatorio]
});

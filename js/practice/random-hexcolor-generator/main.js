const button = document.querySelector("#changeColorButton");

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

button.addEventListener("click", () => {
  const textColor = document.querySelector("#colorText");
  const newColor = generateRandomColor()
  textColor.textContent  = newColor

  document.body.style.backgroundColor = newColor
  
});
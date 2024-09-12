const redColor = document.querySelector("#redColor");
const greenColor = document.querySelector("#greenColor");
const blueColor = document.querySelector("#blueColor");

const applyNewColor = () => {
  document.body.style.backgroundColor = `rgb(${redColor.value},${greenColor.value},${blueColor.value})`
}

const handleNewColor = (item, textColor) => {
  document.querySelector(textColor).textContent = item.value;
  applyNewColor()
};

redColor.addEventListener("change", function () {
  handleNewColor(this, "#redText");
});
greenColor.addEventListener("change", function () {
  handleNewColor(this, "#greenText");
});
blueColor.addEventListener("change", function () {
  handleNewColor(this, "#blueText");
});

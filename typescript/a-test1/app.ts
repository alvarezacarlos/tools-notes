const addButton = document.getElementById('addButton')!
const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;

const add = (num1: number, num2: number) => {
  return num1 + num2
}

addButton.addEventListener('click', e => {
  e.preventDefault()
  const addResut = add(+num1.value, +num2.value)
  console.log(addResut)
})
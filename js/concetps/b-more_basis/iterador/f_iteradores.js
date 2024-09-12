// node list iteration using iterators directly
const pNode = document.querySelectorAll('p')
Array.from(pNode.values()).forEach(elem => console.log(elem))
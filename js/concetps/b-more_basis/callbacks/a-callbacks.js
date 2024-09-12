function fetchData(callback) {
  setTimeout(() => {
    const data = 'Datos recuperados'
    callback(data)
  }, 2000)
}

//will be my callback function
// function myCallBackFunction(data) {
//   console.log(data)
// }
// fetchData(myCallBackFunction)


fetchData(function(data){
  console.log(data)
})
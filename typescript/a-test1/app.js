var addButton = document.getElementById('addButton');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var add = function (num1, num2) {
    return num1 + num2;
};
addButton.addEventListener('click', function (e) {
    e.preventDefault();
    var addResut = add(+num1.value, +num2.value);
    console.log(addResut);
});

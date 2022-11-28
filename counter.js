var input_1 = document.getElementById("number1");
var input_2 = document.getElementById("number2");
var button = document.getElementById("AddButton");
var inputData = document.getElementById("input-data");
var integer = 0;
var addNumber = function (num1, num2) {
    integer = num1 + num1;
};
button.addEventListener("click", function (e) {
    e.preventDefault();
    addNumber(+input_1.value, +input_2.value);
    inputData.innerHTML = integer;
});

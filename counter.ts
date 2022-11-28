const input_1 = document.getElementById("number1")! as HTMLInputElement;
const input_2 = document.getElementById("number2")! as HTMLInputElement;
const button = document.getElementById("AddButton");
const inputData = document.getElementById("input-data")
let integer = 0;
const addNumber = (num1: number, num2: number) => {
        integer = num1 + num1
};

button.addEventListener("click" function(e) {
    e.preventDefault()
    addNumber(+input_1.value, +input_2.value)
    inputData.innerHTML = integer;
});

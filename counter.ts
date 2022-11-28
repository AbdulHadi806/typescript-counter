const input_1 = document.getElementById("number1")! as HTMLInputElement;
const input_2 = document.getElementById("number2")! as HTMLInputElement;
const button = document.getElementById("AddButton")!;
const inputData = document.getElementById("input-data")!
let integer = 0;
const addNumber = (num1: number, num2: number) => {
       return integer = num1 + num2
};
button.addEventListener("click", function(e) {
    e.preventDefault()
     inputData.innerHTML = String(addNumber(+input_1.value, +input_2.value))
});
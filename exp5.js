const var1 = document.querySelector('.js-num1');
const var2 = document.querySelector('.js-num2');

const num1 = Number(var1.value);
const num2 = Number(var2.value);

function add() {


    const result = num1 + num2;
    console.log("Result:", result);

}

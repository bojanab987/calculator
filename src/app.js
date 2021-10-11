
// import { Calculator } from "./Calculator";


const numberKeys = document.querySelectorAll('.js-number');
const operatorKeys = document.querySelectorAll('.js-operator');
const deleteKey = document.querySelector('.js-delete');
const resetKey = document.querySelector('.js-reset');
const equalsKey = document.querySelector('.js-equals');
const currentEl = document.querySelector('.js-current');
const previousEl = document.querySelector('.js-previous')



import './js/theme';
import { Calculator } from './js/Calculator';

const calc = new Calculator(currentEl, previousEl);

numberKeys.forEach((key) => {
    key.addEventListener("click", () => {
        calc.appendNumber(key.innerText);
        calc.updateDisplay();
    })
});

operatorKeys.forEach((key) => {
    key.addEventListener("click", () => {
        calc.selectOperation(key.innerText);
        calc.updateDisplay();
    });
});

deleteKey.addEventListener("click", () => {
    calc.deleteOne();
    calc.updateDisplay();
});

resetKey.addEventListener("click", () => {
    calc.clearScreen();
    calc.updateDisplay();
});

equalsKey.addEventListener("click", () => {
    calc.calculate();
    calc.updateDisplay();
});

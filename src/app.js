import './js/theme';
import { Calculator } from './js/Calculator';
import './styles/main.scss';

const numberKeys = document.querySelectorAll('.js-number');
const operatorKeys = document.querySelectorAll('.js-operator');
const deleteKey = document.querySelector('.js-delete');
const resetKey = document.querySelector('.js-reset');
const equalsKey = document.querySelector('.js-equals');
const currentEl = document.querySelector('.js-current');
const previousEl = document.querySelector('.js-previous');
const screen = document.querySelector('.js-screen');

const calc = new Calculator(currentEl, previousEl);

numberKeys.forEach((key) => {
    key.addEventListener("click", () => {
        calc.appendNumber(key.innerText);
        calc.updateDisplay();
        if (currentEl.offsetWidth >= screen.offsetWidth - 29) {
            currentEl.textContent = 'max digits exceeded';
        }
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
    if (currentEl.offsetWidth >= screen.offsetWidth - 29) {
        currentEl.textContent = 'max digits exceeded';
        currentEl.classList.add("resize");
        calc.clearScreen();
        currentEl.classList.remove('resize');
    } else {
        calc.updateDisplay();
    }
    // calc.updateDisplay();
});



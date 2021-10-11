export class Calculator {
    constructor(currentEl, previousEl) {
        this.currentEl = currentEl;
        this.previousEl = previousEl;

        this.clearScreen();
    }

    clearScreen() {
        this.current = "";
        this.previous = "";
        this.operation = undefined;
    }

    appendNumber(number) {
        if (number === "." && this.current.toString().includes(".")) return;
        this.current = this.current.toString() + number.toString();
    }

    selectOperation(operation) {
        if (this.current === "") return;
        if (this.previous !== "") {
            this.calculate();
        }
        this.previous = this.current;
        this.current = "";
        this.operation = operation;
    }

    calculate() {
        if (!this.current || !this.previous || !this.operation) return;
        let result;
        const curr = parseFloat(this.current);
        const prev = parseFloat(this.previous);
        switch (this.operation) {
            case "+":
                result = curr + prev;
                break;
            case "-":
                result = prev - curr;
                break;
            case "x":
                result = prev * curr;
                break;
            case "/":
                result = prev / curr;
                break;
        }
        this.current = result;
        this.previous = "";
        this.operation = undefined;
        this.updateDisplay();
    }

    deleteOne() {
        this.current = this.current.toString().slice(0, -1);
    }

    updateDisplay() {
        this.currentEl.innerText = this.formatNumber(this.current);
        if (this.previous !== "" && this.operation !== undefined) {
            this.previousEl.innerText =
                this.formatNumber(this.previous) + this.operation;
        } else {
            this.previousEl.innerText = this.previous;
        }
    }

    formatNumber(number) {
        if (number === "") return "";
        if (number.toString().includes(".")) {
            const [integerDigits, decimalDigits] = number.toString().split(".");
            return (
                Number(integerDigits).toLocaleString(undefined) + "." + decimalDigits
            );
        } else {
            return Number(number).toLocaleString(undefined);
        }
    }
}


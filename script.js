let expression = "";

const history = document.getElementById("history");
const result = document.getElementById("result");

function append(value) {

    expression += value;

    history.textContent = expression
        .replace(/\*/g, "×")
        .replace(/\//g, "÷");

    result.textContent = expression || "0";

}

function clearDisplay() {

    expression = "";
    history.textContent = "";
    result.textContent = "0";

}

function deleteLast() {

    expression = expression.slice(0, -1);

    history.textContent = expression
        .replace(/\*/g, "×")
        .replace(/\//g, "÷");

    result.textContent = expression || "0";

}

function calculate() {

    try {

        let answer = eval(expression);

        history.textContent = expression
            .replace(/\*/g, "×")
            .replace(/\//g, "÷") + " =";

        result.textContent = answer;

        expression = answer.toString();

    } catch {

        result.textContent = "Error";

        expression = "";

    }

}

document.addEventListener("keydown", (e) => {

    if ("0123456789+-*/().%".includes(e.key)) {
        append(e.key);
    }

    if (e.key === "Enter") {
        calculate();
    }

    if (e.key === "Backspace") {
        deleteLast();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }

});
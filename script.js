const display = document.getElementById("display");

let expression = "";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", () => {

const value = button.textContent;

switch (value) {

case "C":

expression = "";

display.value = "0";

break;

case "CE":

expression = expression.slice(0, -1);

display.value = expression || "0";

break;

case "=":

try {

expression = eval(expression).toString();

display.value = expression;

} catch {

display.value = "Error";

expression = "";

}

break;

case "%":

try {

expression = (

eval(expression) / 100

).toString();

display.value = expression;

} catch {

display.value = "Error";

expression = "";

}

break;

default:

if (

display.value === "0" &&

!isNaN(value)

) {

expression = value;

} else {

expression += value;

}

display.value = expression;

}

});

});

const one = document.getElementById("one").innerHTML;
const two = document.getElementById("two").innerHTML;
const three = document.getElementById("three").innerHTML;
const four = document.getElementById("four").innerHTML;
const five = document.getElementById("five").innerHTML;
const six = document.getElementById("six").innerHTML;
const seven = document.getElementById("seven").innerHTML;
const eight = document.getElementById("eight").innerHTML;
const nine = document.getElementById("nine").innerHTML;
const zero = document.getElementById("zero").innerHTML;
const plus = document.getElementById("plus").innerHTML;
const minus = document.getElementById("minus").innerHTML;
const multiply = document.getElementById("multiply").innerHTML;
const divide = document.getElementById("divide").innerHTML;


let currentExpression = ""; // Initialize an empty string to store the expression.

function addtoarray(value) {
    if (value === "=") {
        // When "=" is pressed, evaluate the expression and display the result.
        try {
            const result = eval(currentExpression); // Use eval to calculate the result.
            document.querySelector(".calculator-display h1").textContent = result;
        } catch (error) {
            document.querySelector(".calculator-display h1").textContent = "Error";
        }
        currentExpression = ""; // Reset the expression.
    } else if (value === "AC") {
        // Clear the expression.
        currentExpression = "";
        document.querySelector(".calculator-display h1").textContent = "";
    } else if (value === "DEL") {
        // Remove the last character from the expression. 
        currentExpression = currentExpression.slice(0, -1);
        document.querySelector(".calculator-display h1").textContent = currentExpression;
    } else {
        // Append the value to the expression.
        currentExpression += value;
        document.querySelector(".calculator-display h1").textContent = currentExpression;
    }
}

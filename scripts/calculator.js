window.onload = init;

function init()
{
    document.getElementById("buttonAdd").onclick = add;
    document.getElementById("buttonSubtract").onclick = subtract;
    document.getElementById("buttonMultiply").onclick = multiply;
    document.getElementById("buttonDivide").onclick = divide;
}

function add()
{
    const number1 = Number(document.getElementById("number1Field").value);
    const number2 = Number(document.getElementById("number2Field").value);

    const answer = number1 + number2;
   
    document.getElementById("answerField").value = answer
}

function subtract()
{
    const number1 = Number(document.getElementById("number1Field").value);
    const number2 = Number(document.getElementById("number2Field").value);

    const answer = number1 - number2;
    
    document.getElementById("answerField").value = answer
}

function multiply()
{
    const number1 = Number(document.getElementById("number1Field").value);
    const number2 = Number(document.getElementById("number2Field").value);

    const answer = number1 * number2;
   
    document.getElementById("answerField").value = answer
}

function divide()
{
    const number1 = Number(document.getElementById("number1Field").value);
    const number2 = Number(document.getElementById("number2Field").value);

    const answer = number1 / number2;

    document.getElementById("answerField").value = answer
}
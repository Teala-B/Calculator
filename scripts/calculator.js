function add()
{
    const number1 = Number(document.getElementById("numer1Field").value);
    const number2 = Number(document.getElementById("numer2Field").value);

    const answer = number1 + number2;
    console.log(answer);

    document.getElementById("answerField").value = answer
}

function subtract()
{
    const number1 = Number(document.getElementById("numer1Field").value);
    const number2 = Number(document.getElementById("numer2Field").value);

    const answer = number1 - number2;
    console.log(answer);

    document.getElementById("answerField").value = answer
}

function multiply()
{
    const number1 = Number(document.getElementById("numer1Field").value);
    const number2 = Number(document.getElementById("numer2Field").value);

    const answer = number1 * number2;
    console.log(answer);

    document.getElementById("answerField").value = answer
}

function divide()
{
    const number1 = Number(document.getElementById("numer1Field").value);
    const number2 = Number(document.getElementById("numer2Field").value);

    const answer = number1 / number2;
    console.log(answer);

    document.getElementById("answerField").value = answer
}
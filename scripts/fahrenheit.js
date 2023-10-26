window.onload = init;

function init() 
{
    document.getElementById("buttonConvert").onclick = fahrenheitToCelcius
}

function fahrenheitToCelcius()
{
    let fahrenheit = Number(document.getElementById("number1Field").value)

    let celsius = (fahrenheit - 32) * 5/9


    document.getElementById("answerField").value = celsius
}
window.onload = init;

function init() 
{
    document.getElementById("buttonConvert").onclick = fahrenheitToCelcius
}

function fahrenheitToCelcius()
{
    let celsius = Number(document.getElementById("number1Field").value)

    let fahrenheit = (celsius * 9/5) + 32;


    document.getElementById("answerField").value = fahrenheit
}
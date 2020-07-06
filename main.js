const input = document.querySelector("input");
const result = document.getElementById("result");
const submit = document.getElementById("submit")
submit.addEventListener("click", myFunction);

function myFunction() {
    const number = input.value
    const commaRemoved = number.replace(',', '.');
    const sum = 273.15 + +commaRemoved
    const roundedSum = (Math.round(sum * 100) / 100).toFixed(2);
    const output = isNaN(roundedSum) ? "wpisz liczbę" : roundedSum
    const outputString = output.toString();
    const dotRemoved = outputString.replace('.', ',');
    return result.textContent = dotRemoved
}
/* EXPLANATION WHY I USED CONVERSION FROM COMAS TO DOTS AND FROM DOTS TO COMMAS: IN POLAND WE USE COMMAS INSTEAD OF DOTS WHEN WE WRITE NUMBERS*/



/* so if you want to round, say number 0.55555, only to the second decimal place; you can do the following(this is step-by-step concept):

    0.55555 * 100 = 55.555
    Math.Round(55.555) -> 56.000
    56.000 / 100 = 0.56000a
    (0.56000).toFixed(2) -> 0.56

    and this is the code:
     var rounded = (Math.round(number * 100) / 100).toFixed(2);

-----

      if (isNaN(rounded)) {
        console.log("niejest")
    } else {
        console.log("jest")
    }
*/
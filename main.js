const input = document.querySelector("input");
const result = document.getElementById("result");
const submit = document.getElementById("submit")

addEventListener("click", myFunction);

function myFunction() {
    let number = input.value

    //let rounded = (Math.round(number * 100) / 100).toFixed(2);

    let sum = 273.15 + +number
    let roundedSum = (Math.round(sum * 100) / 100).toFixed(2);
    let output = isNaN(roundedSum) ? "wpisz liczbę" : roundedSum
    return result.textContent = output
}





/* so if you want to round, say number 0.55555, only to the second decimal place; you can do the following(this is step-by-step concept):

    0.55555 * 100 = 55.555
    Math.Round(55.555) -> 56.000
    56.000 / 100 = 0.56000
    (0.56000).toFixed(2) -> 0.56

    and this is the code:
     var rounded = (Math.round(number * 100) / 100).toFixed(2);



      if (isNaN(rounded)) {
        console.log("niejest")
    } else {
        console.log("jest")
    }
*/
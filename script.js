document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convert-btn");
    const degreeInput = document.getElementById("degree");
    const tempType = document.getElementById("temp-type");
    const resultDisplay = document.querySelector(".celcius-value");

    convertBtn.addEventListener("click", function () {
        let degree = parseFloat(degreeInput.value);
        let type = tempType.value;
        
        if (isNaN(degree)) {
            resultDisplay.textContent = "Enter a valid number";
            return;
        }

        let celsius;
        
        if (type === "fahrenheit") {
            celsius = (degree - 32) * (5 / 9);
        } else if (type === "kelvin") {
            celsius = degree - 273.15;
        }

        resultDisplay.textContent = celsius.toFixed(2); // Display result with two decimal places
    });
});
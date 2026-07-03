function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    height = height / 100; 
    let bmi = weight / (height * height);
    document.getElementById("bmi-value").textContent = `Your BMI: ${bmi.toFixed(3)}`;
    document.getElementById("bmi-category").textContent = `Category: ${getBMICategory(bmi)}`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmi-value").textContent = "Your BMI: __";
    document.getElementById("bmi-category").textContent = "Category: __";
}
const txtWeight = document.getElementById("txtWeight");
const txtHeight = document.getElementById("txtHeight");
const indicator = document.getElementById("indicator");

function getBMI() {
  // Get input values and convert
  const weight = Number(txtWeight.value);
  const height = Number(txtHeight.value);

  // validate numbers
  txtWeight.classList.remove("is-invalid");
  txtHeight.classList.remove("is-invalid");

  if (!weight || weight <= 0 || weight > 500) {
    txtWeight.classList.add("is-invalid");
    return;
  }

  if (!height || height <= 0 || height > 3000) {
    txtHeight.classList.add("is-invalid");
    return;
  }

  // calculate BMI value
  const bmi = weight / Math.pow(height / 100, 2);
  console.log(bmi);

  // display BMI value

  const leftPosition = bmi > 50 ? 100 : bmi * 2;
  indicator.style.left = `${leftPosition}%`; // moves the indicator

  indicatorLabel.textContent = leftPosition.toFixed(0); // determines the value inside label

  // Puts indicator on left if the indicator is in rightmost side, and vice versa
  if (leftPosition > 50) {
    indicatorLabel.style.left = "-35px";
  } else {
    indicatorLabel.style.left = "20px";
  }
}

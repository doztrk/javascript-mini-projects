function calculateAge() {
  // 1 - Select the inputs that will be used in the app and assign it to the variable    // 2 - Get the inputs values and assign it to the variable

  const txtDay = document.getElementById("txtDay");
  const txtMonth = document.getElementById("txtMonth");
  const txtYear = document.getElementById("txtYear");

  const lblYears = document.getElementById("lblYears");
  const lblMonths = document.getElementById("lblMonths");
  const lblDays = document.getElementById("lblDays");

  console.log(txtDay, txtMonth, txtYear);

  // 2 - Take the inputs and assing it to a variable
  const day = parseInt(txtDay.value);
  const month = parseInt(txtMonth.value);
  const year = parseInt(txtYear.value);

  console.log(day, month, year);

  // falsy values: false, 0, "", null, undefined, NaN

  // 3 - Validate the input values
  if (!day || !month || !year) {
      alert("Please provide valid date");
  }
  // 4 - Calculate the age
  // 5 - Display the result in the HTML
}

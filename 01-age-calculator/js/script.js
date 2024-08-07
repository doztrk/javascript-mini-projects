function calculateAge() {
  // 1 - Select the inputs that will be used in the app and assign it to the variable    // 2 - Get the inputs values and assign it to the variable

  const txtDay = document.getElementById("txtDay");
  const txtMonth = document.getElementById("txtMonth");
  const txtYear = document.getElementById("txtYear");

  const lblYears = document.getElementById("lblYears");
  const lblMonths = document.getElementById("lblMonths");
  const lblDays = document.getElementById("lblDays");

  const currentDateTime = new Date();

  console.log(txtDay, txtMonth, txtYear);

  // 2 - Take the inputs and assing it to a variable
  const day = parseInt(txtDay.value);
  const month = parseInt(txtMonth.value);
  const year = parseInt(txtYear.value);

  console.log(day, month, year);

  // falsy values: false, 0, "", null, undefined, NaN

  // 3 - Validate the input values
  if (!day || day < 1 || day > 31) {
    alert("Invalid day");
    return;
  }
  if (!month || month < 1 || month > 12) {
    alert("Invalid month");
    return;
  }
  const currentYear = currentDateTime.getFullYear();
  const currentMonth = currentDateTime.getMonth() + 1; // Zero based
  const currentDay = currentDateTime.getDate();

  if (!year || year < currentYear - 150 || year > currentYear) {
    alert("Invalid year");
    return;
  }

  // 4 - Calculate the age

  // 06-08-2024
  // 03-06-2000
  // ---------------
  //  3  2   24
  // 36-19-2023
  // 15-10-2000
  // ---------------
  //  21  9   23

  let ageYears = currentYear - year;
  let ageMonths = currentMonth - month;
  let ageDays = currentDay - day;

  if (ageDays < 0) {
    ageDays += 30;
    ageMonths--;
  }
  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }
  console.log(ageYears, ageMonths, ageDays);

  // 5 - Display the result in the HTML

  lblYears.innerHTML = ageYears;
  lblMonths.innerHTML = ageMonths;
  lblDays.innerHTML = ageDays;
}

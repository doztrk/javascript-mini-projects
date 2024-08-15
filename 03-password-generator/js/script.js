// DOM ELEMENTS
const lblPassword = document.getElementById("lblPassword");
const btnCopy = document.getElementById("btnCopy");
const lblCharLength = document.getElementById("lblCharLength");
const rangeCharLength = document.getElementById("rangeCharLength");
const chkUppercase = document.getElementById("chkUppercase");
const chkLowercase = document.getElementById("chkLowercase");
const chkNumbers = document.getElementById("chkNumbers");
const chkSymbols = document.getElementById("chkSymbols");
const btnGenerate = document.getElementById("btnGenerate");

rangeCharLength.addEventListener("change", (e) => {
  lblCharLength.innerHTML = rangeCharLength.value;
});

btnGenerate.addEventListener("click", (e) => {
  // Take input values
  const passwordLength = Number(rangeCharLength.value);
  const hasUppercase = chkUppercase.checked;
  const hasLowercase = chkLowercase.checked;
  const hasNumbers = chkNumbers.checked;
  const hasSymbols = chkSymbols.checked;

  const passwordParams = {
    passwordLength,
    hasUppercase,
    hasLowercase,
    hasNumbers,
    hasSymbols,
  };

  // Validate input values
  const resValidation = validateInputs(passwordParams);
  if (!resValidation) return;

  // Generate Password
  const password = generatePassword(passwordParams);
  lblPassword.textContent = password;

  //Generate Strength

  const strengthPoint = getStrengthPoint(passwordParams);
  const strengthText = getStrengthText(strengthPoint);

  lblStrength.innerHTML = strengthText;
});

//GET STRENGTH TEXT
const getStrengthText = (point) => {
  let strengthText = "";
  let strengthClass = "weak";

  //How many strength element there will be ?
  for (let i = 0; i < Math.round(point / 10); i++) {
    strengthText += "&#9929;";
  }

  if (point > 70) {
    strengthClass = "strong";
  } else if (point > 30) {
    strengthClass = "normal";
  }

  return `<span class= ${strengthClass}>${strengthText}</span>`;
  //What will be the strength color
};

//GET STRENGTH POINT
const getStrengthPoint = (params) => {
    let failSafe = 0;
    if(params.passwordLength < 5){
        failSafe = 5;
    }else{
        failSafe = params.passwordLength;
    }
  const point =
    (Number(params.hasUppercase) +
      Number(params.hasLowercase) +
      Number(params.hasNumbers) +
      Number(params.hasSymbols) * 2) *
    failSafe;

  return point;
};

//GENERATE PASSWORD
const generatePassword = (params) => {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  let allChars = "";
  let password = "";

  if (params.hasUppercase) {
    password += getRandomChar(upperCaseLetters);
    allChars += upperCaseLetters;
  }
  if (params.hasLowercase) {
    password += getRandomChar(lowerCaseLetters);
    allChars += lowerCaseLetters;
  }
  if (params.hasNumbers) {
    password += getRandomChar(numbers);
    allChars += numbers;
  }
  if (params.hasSymbols) {
    password += getRandomChar(symbols);
    allChars += symbols;
  }

  for (let i = password.length; i < params.passwordLength; i++) {
    password += getRandomChar(allChars);
  }

  password = randomSort(password);

  return password;
};

//RANDOM SORT
const randomSort = (str) => {
  const randStr = str
    .split("")
    .sort(() => Math.random - 0.5)
    .join("");
  return randStr;
};

//GENERATE RANDOM CHAR
const getRandomChar = (char) => {
  //  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const randomIndex = Math.floor(Math.random() * char.length);
  const character = char.charAt(randomIndex);
  return character;
};

//

//VALIDATION
const validateInputs = (params) => {
  // Length Validation
  if (params.passwordLength < 4) {
    alert("Password length must be at least 4 characters");
    return false;
  }

  //Check Validation

  if (
    !params.hasUppercase &&
    !params.hasLowercase &&
    !params.hasNumbers &&
    !params.hasSymbols
  ) {
    alert("Password must include at least a letter, a number or a symbol");
    return false;
  }
  return true;
};

//API
let API_URL = "https://api.exchangerate-api.com/v4/latest/";

//DOM ELEMENTS
let currencyOne = document.getElementById("currency-one");
let currencyTwo = document.getElementById("currency-two");
let amountEl = document.getElementById("amount");
let btnConvert = document.getElementById("btn-convert");
let resultEl = document.getElementById("result");

// ========================================= 1ST WAY =========================================
// FETCH DATA

// fetch("./data/currencies.json")
// 	.then((response) => response.json())
// 	.then((data) => {
// 		let keys = Object.keys(data);
// 		let values = Object.values(data);

// 		let optionString = "";

// 		/* 		values.map((item, index) => {
// 				optionString += `<option value="${keys[index]}">${item}</option>`;
// 			}).join("");

// 		console.log(optionString); */

// 		//OR TRUER WAY

// 		for (let i = 0; i < keys.length; i++) {
// 			optionString += `<option value="${keys[i]}">${values[i]}</option>`;
// 		}

// /* 		console.log(optionString);
//  */
// 		currencyOne.innerHTML = optionString;
// 		currencyTwo.innerHTML = optionString;
// 	})
// 	.catch((err) => console.log(err));

// // BUTTON EVENT LISTENER
// btnConvert.addEventListener("click", () => {
// 	let baseCurrency = currencyOne.value;
// 	let targetCurrency = currencyTwo.value;

// 	//console.log(baseCurrency, targetCurrency);, Prepared to be sent to API

// 	let amount = amountEl.value;
// 	if(baseCurrency === targetCurrency) alert("Please select different currencies");
// 	/* console.log(amount); */

// 	fetch(`${API_URL}${baseCurrency}`)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		let rate = data.rates[targetCurrency];

// 		resultEl.innerHTML = `${amount} ${baseCurrency} = ${(amount * rate).toFixed(2)} ${targetCurrency}`;
// 		amountEl.value = "";

// 		/* //2nd way */
// 	})
// });

// ========================================= 2ND WAY =========================================

async function fetchCurrencies() {
	try {
		const response = await fetch("./data/currencies.json");
		const data = await response.json();
		//console.log(data);

		let keys = Object.keys(data);
		let values = Object.values(data);

		let optionString = "";
		for (let i = 0; i < keys.length; i++) {
			optionString += `<option value="${keys[i]}">${values[i]}</option>`;
		}

		currencyOne.innerHTML = optionString;
		currencyTwo.innerHTML = optionString;


	} catch (err) {
		console.log(err);
	}
}

fetchCurrencies();

async function convertCurrency() {

	let baseCurrency = currencyOne.value;
	let targetCurrency = currencyTwo.value;
	let amount = amountEl.value;

	try{
		const response = await fetch(`${API_URL}${baseCurrency}`);
		const data = await response.json();

		let rates = data.rates[targetCurrency];
		resultEl.innerHTML = `${amount} ${baseCurrency} = ${(amount * rates).toFixed(2)} ${targetCurrency}`
		amountEl.value = "";

	}catch(err){
		console.log(err);
	}
}
btnConvert.addEventListener("click", convertCurrency);








/* const getData = async (baseCurrency) => {
	try {
		const response = await fetch(`${API_URL}${baseCurrency}`);
		const data = await response.json();

		console.log(data);
	}catch (err) {
		console.log(err);
	}
} */

//To get more than one API/DATA faster, use of Promise is more effective. 

/* async function fetchMultipleCurrency(){

	try{
		const [usdResponse, othersResponse] = await Promise.all([
			fetch("${API_URL_USD}"),
			fetch("${API_URL_OTHERS}"),
		]);
		const usdData = await response.json();
		const othersData = await othersResponse.json();
		console.log(data);
	}catch(err){
		console.log(err);
	}
} */
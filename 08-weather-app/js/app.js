/* DOM ELEMENTS */
const cityInputEl = document.querySelector(".inputText");
const buttonEl = document.querySelector(".btn");
const tempEl = document.querySelector(".temp");
const feltWarmthEl = document.getElementById("felt-warmth");
const cityEl = document.querySelector(".city");
const weatherValue = document.getElementById("weatherValue");

const getWeatherData = async (cityName) => {
	const API_KEY = "aca0306fa3cb8d644f90c960d02d9ed1";
	const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=tr`;

	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		console.log(data);

		if (!response) {
			throw new Error();
		}

		//Display in the HTML
		cityEl.textContent = `${data.name} / ${data.sys.country}`;
		tempEl.textContent = `${data.main.temp} °C`;
		feltWarmthEl.textContent = `Feels like ${data.main.feels_like} °C`;
		weatherValue.textContent = `${data.weather[0].description}`;
	} catch (error) {
		console.log(error);
	}
};

buttonEl.addEventListener("click", () => {
	let city = cityInputEl.value.trim();

	if (city) {
		getWeatherData(city);
	} else {
		cityInputEl.value = "";
		alert("Please enter a city name");
	}
});

cityInputEl.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		let city = cityInputEl.value.trim();

		if (city) {
			getWeatherData(city);
		} else {
			cityInputEl.value = "";
			alert("Please enter a city name");
		}
	}
});


cityInputEl.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		fetchWeather();
	}
});

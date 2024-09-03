/* API URL */
const API_URL = " http://api.quotable.io/random";

/* DOM ELEMENTS */
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const generateBtnEl = document.getElementById("generate");
const shareBtnEl = document.getElementById("share");
const copyButtonEl = document.getElementById("copy");
const copyNotification = document.getElementById("copy-notification");

/* EVENT LISTENERS */
generateBtnEl.addEventListener("click", async () => {
	getData();
});

shareBtnEl.addEventListener("click", () => {
	shareOnX();
});

copyButtonEl.addEventListener("click", () => {
	saveToNotes();
});

const getData = async () => {
	try {
		const response = await fetch(API_URL);

		// Check if the response is successful
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		quoteEl.innerHTML = data.content;
		authorEl.innerHTML = data.author;
		return data;
	} catch (err) {
		console.error("Failed to fetch quote:", err);
	}
};

const shareOnX = async () => {
	const quote = quoteEl.innerText;
	const author = authorEl.innerText;

	const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
	window.open(twitterUrl, "_blank");
};

const saveToNotes = () => {
	const quote = quoteEl.innerText;
	const author = authorEl.innerText;
	const textToSave = `"${quote}" - ${author}`;

	// Copy text to clipboard
	navigator.clipboard.writeText(textToSave).then(
		() => {
			copyNotification.innerText = "Copied to clipboard";
			copyNotification.style.display = "block";
			copyNotification.style.opacity = "1";

			setTimeout(() => {
				copyNotification.style.opacity = "0";
			}, 2000);

			setTimeout(() => {
				copyNotification.style.display = "none";
			}, 3000);
		},
		(err) => {
			console.error("Failed to copy text: ", err);
		}
	);
};

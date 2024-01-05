const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
	let value = e.target.value;

	value ? (span.innerText = value) : (span.innerText = "Anonymous");
});

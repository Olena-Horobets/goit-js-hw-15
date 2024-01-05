const body = document.querySelector("body");
const text = document.querySelector(".color");
const btn = document.querySelector(".change-color");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function onClick(e) {
	const color = getRandomHexColor();

	body.style.backgroundColor = color;
	text.innerText = color;
}

btn.addEventListener("click", onClick);

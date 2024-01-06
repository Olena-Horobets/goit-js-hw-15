const input = document.querySelector("input");
const controls = document.querySelector("#controls");
const container = document.querySelector("div#boxes");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes(amount) {
	let markup = "";
	let size = 30;

	for (let i = 0; i < amount; i += 1) {
		const color = getRandomHexColor();
		if (i !== 0) size += 10;

		markup += `<div style="width:${size}px;height:${size}px;background-color:${color};"></div>`;
	}

	container.innerHTML = markup;
}

function destroyBoxes() {
	container.innerHTML = "";
}

function onClick(e) {
	if (e.target.dataset.hasOwnProperty("create")) {
		createBoxes(Number(input.value));
	}

	if (e.target.dataset.hasOwnProperty("destroy")) {
		destroyBoxes();
	}
}

controls.addEventListener("click", onClick);

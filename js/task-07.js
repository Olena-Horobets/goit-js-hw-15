const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${input.value}px`;

const onInput = (e) => {
	text.style.fontSize = `${e.target.value}px`;
};

input.addEventListener("input", onInput);

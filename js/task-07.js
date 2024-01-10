const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onChange = (e) => {
	text.style.fontSize = `${e.target.value}px`;
};

input.addEventListener("change", onChange);

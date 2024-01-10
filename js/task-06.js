const input = document.querySelector("#validation-input");

const onBlur = (e) => {
	const input = e.target;
	const isValid = Number(input.dataset.length) === input.value.length;

	if (isValid) {
		input.classList.remove("invalid");
		input.classList.add("valid");
	} else {
		input.classList.remove("valid");
		input.classList.add("invalid");
	}
};

input.addEventListener("blur", onBlur);

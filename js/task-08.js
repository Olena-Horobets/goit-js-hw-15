const form = document.querySelector(".login-form");
const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="passwordInput"]');

const onSubmit = (e) => {
	e.preventDefault();
	const email = form.elements.email.value;
	const password = form.elements.password.value;

	if (!email) alert("Please, enter your email");
	else if (!password) alert("Please, enter your password");
	else {
		console.log({ email, password });
		form.reset();
	}
};

form.addEventListener("submit", onSubmit);

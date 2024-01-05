const counter = document.getElementById("counter");
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");

let counterValue = 0;
value.innerText = counterValue;

counter.addEventListener("click", (e) => {
	switch (e.target.dataset.action) {
		case "increment":
			counterValue += 1;
			break;
		case "decrement":
			counterValue -= 1;
			break;
	}
	value.innerText = counterValue;
});

const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const list = document.querySelector("#ingredients");
const wrapper = document.createDocumentFragment();

const items = ingredients.forEach((el) => {
	const item = document.createElement("li");
	item.innerText = el;
	item.classList.add("item");
	wrapper.appendChild(item);
});

list.appendChild(wrapper);

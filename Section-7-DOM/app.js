// select first matches HTML element
const h1 = document.querySelector("h1");
// print the object
console.log({ h1 });
// print it's content
console.log(h1.textContent);
// assign new variable
h1.textContent = "New text content";
// style h1 element
h1.style.color = "red";

// select first matches HTML element
const input = document.querySelector("input");
// it only changes on user UI, not HTML
input.value = "Assigned new value";
// it changes on user UI, and HTML
input.setAttribute("value", "Assigned new value by setAttribute");

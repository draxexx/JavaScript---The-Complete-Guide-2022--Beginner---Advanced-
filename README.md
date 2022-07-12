# JavaScript - The Complete Guide 2022 (Beginner + Advanced)

## SECTION 2

> Add javascript file to your HTML project

```HTML
<script src="assets/scripts/app.js"></script>
```

> Import order is important

```HTML
<script src="assets/scripts/vendor.js"></script>
<script src="assets/scripts/app.js"></script>
```

> Variable naming should be <b>camelCase</b>

```js
let userName; // best practice camelCase
let ageGroup5; // only letters and digits
let $kindOfSpecial; // starting with $ allowed
let _internalValue; // starting with _ allowed
```

> Some operators

```js
// % => divide two numbers, yield reminder
// ** => (2**3) = 8, exponentiation
// a += b => a = a + b
// a -= b => a = a - b
// a *= b => a = a * b
// a /= b => a = a / b
// a++ => a = a + 1
// a-- => a = a - 1
```

> Adding data to the array

```js
let logEntries = [];
logEntries.push(enteredNumber);
```

> Getting the type of the variable

```js
typeof variable;
```

> Using 'defer' while importing script in the head will not block the parsing HTML part. Therefore rendering HTML process will be faster and importing js files will not block it.

```html
<script src="assets/scripts/vendor.js" defer></script>
```

> Using 'async' while importing script in the head will not block the parsing HTML part. Difference between 'defer' and 'async' is 'async' will not wait for the HTML to finish its parsing, it will finish its importing process as soon as possible. 'defer' waits to HTML to finish its parsing.

```html
<script src="assets/scripts/vendor.js" async></script>
```

## SECTION 4

> Boolean Operators

```js
// ' == ' : check for value equality
// ' != ' : check for value inequality
// ' === and !== ' check for value AND type (in)equality
```

> We didn't assigned name attackMonsterHandler, because this function will not be attached to any event handler

```js
function attackMonster() {}
```

> Getting Input value by using Prompt

```js
// first parameter is the text of the input dialog
// second parameter is the initial value of the input dialog
prompt("Maximum life for you and the monster", "100");
```

> Ternary operator

```js
const userName = isLogin ? "Max" : null;
```

> Boolean tricks with logical operators

```js
const isLogin = true;
!!isLogin; // returns true

// default value assignment via OR operator
const name = someInput || "Max"; // if someInput is null 'false', then other condition will be assigned

// use value if condition is true via AND operator
const name = isLoggedIn && "Max"; // if isLoggedIn true then "Max" will be assigned
```

> Loops

```js
// for loop
// execute code a certain amount of times (with counter variable)

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// for-of loop
// execute for every element in an array

for (const el of array) {
  console.log(el);
}

// for-in loop
// execute for every key in an object

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

// while loop
// execute code as long as a condition is true

while (isLoggedIn) {}
```

## SECTION 7 - DOM

> Selecting Elements in DOM

```js
document.getElementById(""); // gets element by id
document.getElementsByClassName(""); // gets elements by class name
document.querySelector(".list-item"); // gets first matched item
document.querySelectorAll(".list-item"); // gets all matched items
```

> Modifying Selected Elements

```js
// select first matches HTML element
const h1 = document.querySelector("h1");
// print it's content
console.log(h1.textContent);
// assign new variable
h1.textContent = "New text content";
// style h1 element
h1.style.color = "red";
```

> Children, Descendants, Parent & Ancestors

1. 'p' is a child of 'div'. 'em' isn't
2. 'p' is a descendant of 'div'. So is 'em'
3. 'div' is a parent of 'p', but not of 'em'
4. 'div' is an ancestor of 'p' and of 'em'

```HTML
<div>
  <p>
    A <em>test!</em>
  </p>
</div>
```

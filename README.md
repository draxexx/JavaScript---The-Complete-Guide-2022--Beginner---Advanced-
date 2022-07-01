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

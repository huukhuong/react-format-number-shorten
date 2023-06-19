## Format number

### Installation

```js
npm i react-format-number-shorten
```

### Usage

Import package

```js
import formatNumber from 'react-format-number-shorten';
```

Basic usage

```js
const pi = 3.14159265359;

console.log(formatNumber(pi)); // 3
console.log(formatNumber(pi, { fixed: 2 })); // 3.14

const price = 125000;
console.log(formatNumber(price)); // 125,000
console.log(formatNumber(price, { decimalSeparator: '.' })); // 125.000
```

Format with shorten

```js
const money = 1000000;

console.log(formatNumber(money, { shorten: true })); // 1M
console.log(formatNumber(money, { fixed: 2, shorten: true })); // 1.00M
console.log(formatNumber(money, { fixed: 2, shorten: true,  decimalSeparator: ',' })); // 1,00M
```

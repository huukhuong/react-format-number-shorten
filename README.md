## Format number

### Installation
```
npm i react-format-number-shorten
```

### Usage

Import package
```
import formatNumber from 'react-format-number-shorten';
```

Basic usage
```
const pi = 3.14159265359;

console.log(formatNumber(pi)); // 3
console.log(formatNumber(pi, 2)); // 3.14
```

Format with shorten
```
const money = 1000000;

console.log(formatNumber(money, 0, true)); // 1M
```
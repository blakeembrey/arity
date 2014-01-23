# Arity

Set a functions arity (the argument count) by proxying function calls.

## When would I use this?

It's unlikely you'll ever need to use this utility in everyday development. The reason I need it is for writing functional utilities and keeping compatibility with user expectations. For example, `curry` uses the function length to know how many times the function needs to be curried. Native utilities like `bind` also work in this fashion.

## Installation

```
npm install blakeembrey/arity --save
```

## Usage

```javascript
var fn    = function () {};
var arity = require('arity');

var oneArg    = arity(1, fn);
var twoArgs   = arity(2, fn);
var threeArgs = arity(3, fn);

oneArgs.length; //=> 1
twoArgs.length; //=> 2
threeArgs.length; //=> 3
```

## License

MIT

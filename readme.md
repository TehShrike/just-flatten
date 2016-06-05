Recursively flatten arrays!

```sh
npm install just-flatten
```

```
var flatten = require('just-flatten')
```

## Usage

<!-- js
var flatten = require('./')
-->

```js
flatten([[1,2,[3]],4]) // => [1,2,3,4]
```

The function expects a single argument: an array to be flattened.  Any other value is returned as-is.

## License

[WTFPL](http://wtfpl2.com/)

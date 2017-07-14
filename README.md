[npm]: https://img.shields.io/npm/v/babel-polyfill-loader.svg
[npm-url]: https://npmjs.com/package/babel-polyfill-loader

[![npm][npm]][npm-url]

# babel-polyfill-loader
A [webpack](https://www.npmjs.com/package/webpack) loader that generates a
customized babel polyfill

## Installation

```sh
npm install babel-polyfill-loader
```

## Usage
Add a babel-polyfill.json file to your project:

```json
{
  "modules": [
    "es6.object.assign",
    "es6.array.find",
    "es6.array.find-index",
    "es6.array.from",
    "es6.string.starts-with",
    "es7.array.includes",
    "es6.symbol"
  ],
  "library": false
}
```

See the [core-js README](https://github.com/zloirock/core-js#custom-build-from-external-scripts) for more options.

Add an entry to your webpack config:

```js
entry: {
  polyfill: 'babel-polyfill-loader!'
}
```

Or require the loader in your project:

```js
require('babel-polyfill-loader!')
```

## License

[MIT](LICENSE)

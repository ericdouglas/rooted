# rooted

[![Build Status](https://travis-ci.org/ericdouglas/rooted.svg)](https://travis-ci.org/ericdouglas/rooted)
[![Coverage Status](https://coveralls.io/repos/ericdouglas/rooted/badge.svg?branch=master&service=github)](https://coveralls.io/github/ericdouglas/rooted?branch=master)
[![npm version](https://badge.fury.io/js/rooted.svg)](http://badge.fury.io/js/rooted)

[![NPM](https://nodei.co/npm/rooted.png)](https://nodei.co/npm/rooted/)

Requiring modules/folders/files in the right way

## Installation

```
npm i rooted --save
```

## Usage

```js
////// bad
var data    = require('../../../../data.json');
var helpers = require('../../../helpers');

///// good
// will build the path starting from the root directory of your application
// and require the respective file/folder/module
var rooted  = require('rooted');
var data    = rooted('data.json');
var helpers = rooted('helpers');
```

You can also get string representing the absolute path of the file/folder, passing `true` as the second argument.

```js
var rooted  = require('rooted');
var data    = rooted('data.json', true);

console.log(typeof data); // "string"
```

## Tests

```
make test
```

## License

[MIT License](http://ericdouglas.mit-license.org/) © Eric Douglas

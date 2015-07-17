# rooted

[![Build Status](https://travis-ci.org/ericdouglas/rooted.svg)](https://travis-ci.org/ericdouglas/rooted)
[![Coverage Status](https://coveralls.io/repos/ericdouglas/rooted/badge.svg?branch=master&service=github)](https://coveralls.io/github/ericdouglas/rooted?branch=master)

Requiring modules/folders/files in the right way

## Installation

  npm i rooted --save

## Usage

```js
var rooted = require( 'rooted' );

// will build the path starting from the root directory of your application
var myFile = rooted( 'path/to/file' ); 
```

## Tests

  make test

## Release History

* 0.1.0 Initial Release

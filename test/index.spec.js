var expect     = require('chai').expect;
var path       = require('path');
var rooted     = require('../');
var example    = rooted('example');
var folder     = rooted('example\\folder');
var stringPath = rooted('path/to/folder', true);

describe('#rooted', function() {

  it('Should return the path to a file based on its root directory', function() {
    expect(example()).to.equal('example index.js');
  });

  it('Should return the path to a file based on its root directory', function() {
    expect(folder()).to.equal('example/folder index.js');
  });

  it('Should return a string for the path of the file', function() {
    var testPath = __dirname + '/path/to/folder';
    testPath = testPath.replace('/test', '');
    expect(stringPath).to.equal(testPath);
  });

});

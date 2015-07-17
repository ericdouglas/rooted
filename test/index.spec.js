var expect  = require( 'chai' ).expect;
var path    = require( 'path' );
var rooted  = require( '../' );
var example = rooted( 'example' );
var folder  = rooted( 'example/folder' );

describe( '#rooted', function() {

  it( 'Should return the path to a file based on its root directory', function() {
    expect( example() ).to.equal( 'example index.js' );
  });

  it( 'Should return the path to a file based on its root directory', function() {
    expect( folder() ).to.equal( 'example/folder index.js' );
  });

});

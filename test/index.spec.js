var expect = require( 'chai' ).expect;
var path   = require( 'path' );
var rooted = require( '../' );

describe( '#rooted', function() {

  it( 'Should return the path to a file based on its root directory', function() {
    expect( rooted( 'test/some/path/to/file' )).to.equal( path.join( __dirname, 'some', 'path', 'to', 'file' ));
  });

  it( 'Should return the path to a file based on its root directory', function() {
    expect( rooted( 'test\\some\\path\\to\\file' )).to.equal( path.join( __dirname, 'some', 'path', 'to', 'file' ));
  });

});

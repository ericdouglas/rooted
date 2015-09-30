var path = require( 'path' );

function rooted( pathTo, onlyString ) {
  var splitBy = '/';
  var args;

  if ( pathTo.search( /\\/ ) >= 0 ) {
    pathTo = pathTo.replace( /\\/g, splitBy );
  }

  var actualPath = __dirname + '/' + pathTo;
  actualPath = actualPath.replace( '/node_modules/rooted', '' );

  if (onlyString) {
    return actualPath;
  } else {
    return require( actualPath );  
  }
};

module.exports = rooted;

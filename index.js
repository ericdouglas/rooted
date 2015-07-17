var path = require( 'path' );

function rooted( pathTo ) {
  var splitBy = '/';
  var args;

  if ( pathTo.search( /\\/ ) >= 0 ) {
    pathTo = pathTo.replace( /\\/g, splitBy );
  }

  args = pathTo.split( splitBy );
  args.unshift( __dirname );

  var actualPath = path.join.apply( this, args );
  actualPath = actualPath.replace( '/node_modules/rooted', '' );

  return require( actualPath );  
};

module.exports = rooted;

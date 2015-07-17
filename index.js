var path = require( 'path' );

function rooted( pathTo ) {
  var splitBy = '/';
  var args;

  if ( pathTo.search( /\\/ ) >= 0 ) {
    pathTo = pathTo.replace( /\\/g, splitBy );
  }

  args = pathTo.split( splitBy );
  args.unshift( __dirname );

  return path.join.apply( this, args );  
};

module.exports = rooted;

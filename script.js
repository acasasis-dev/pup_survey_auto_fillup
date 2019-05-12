function check( x ) {
	for( y = x; y <= 205; y += 10 ) {
		document.getElementById( "Q" + y ).checked = true
	}
}

var x = Number( prompt( "Enter your rating[ 1-5 ]: " ) )
x = x + 10

check( x )

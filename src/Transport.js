import { SymbolOTF } from './Symbols'

export class Transport {
	constructor( otf ) {
		this[ SymbolOTF ] = otf
	}
	get otf() {
		return this[ SymbolOTF ]
	}
	request( {
		url,
	} ) {
		return Promise.reject( new Error( 'No have request allow' ) )
	}
}

Transport.generateStringHeader = function( data ) {
	let arrHeaders = []
	let normalize_string = ( ...strs ) => strs.map( str => String( str || '' ).replace( /[\;\=]/g, '_' ) ).join( '' )
	for ( indexObj of Object.keys( data ) ) {
		if ( indexObj ) {
			arrHeaders.push( [ normalize_string( indexObj ), normalize_string( data[ indexObj ] ) ].filter( e => Boolean( e ) ).join( '=' ) )
		}
	}
	return arrHeaders.join( '; ' )
}

export default Transport

import { SymbolSimpleTransportStorage } from './Symbols'


export class TransportStorage {
	constructor( name ) {
		this[ SymbolSimpleTransportStorage ] = name
	}
	get name() {
		return this[ SymbolSimpleTransportStorage ].toString()
	}
	save( data ) {
		localStorage.setItem( this.name, JSON.stringify( data ) )
	}
	load() {
		try {
			return JSON.parse( localStorage.getItem( this.name ) ) || {}
		} catch ( ex ) {
			return {}
		}
	}
	remove() {
		localStorage.removeItem( this.name )
	}
}

export default TransportStorage

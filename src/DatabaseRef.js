import { SymbolOTF, SymbolDatabase, SymbolDatabasePath } from './Symbols'

export class DatabaseRef {
	constructor( otf, otfdb, namePath ) {
		this[ SymbolOTF ] = otf
		this[ SymbolDatabase ] = otfdb
		this[ SymbolDatabasePath ] = namePath
	}
	get otf() {
		return this[ SymbolOTF ]
	}
	get database() {
		return this[ SymbolDatabase ]
	}
	get path() {
		return this[ SymbolDatabasePath ]
	}
	set( data ) {
		return this
			.otf
			.transport
			.request( {
				url: 'database/update',
				data: {
					typeTransaction: 'set',
					path: this.path,
					data,
				},
			} )
	}
	get( data ) {
		return this
			.otf
			.transport
			.request( {
				url: 'database/update',
				data: {
					typeTransaction: 'get',
					path: this.path,
					data,
				},
			} )
			.then( e => e.json() )
	}
}

export default DatabaseRef

import { SymbolOTF } from './Symbols'
import DatabaseRef from './DatabaseRef'


export class Database {
	constructor( otf ) {
		this[ SymbolOTF ] = otf
	}
	get otf() {
		return this[ SymbolOTF ]
	}
	ref( pathDB ) {
		return new DatabaseRef( this.otf, this, pathDB )
	}
}

export default Database

import { SymbolOTF, SymbolSession } from './Symbols'
import TransportStorage from './TransportStorage'

export class Session {
	constructor( otf ) {
		this[ SymbolOTF ] = otf
		this.tokenId = null
		this.email = null
		this.uid = null
		this[ SymbolSession ] = new TransportStorage( SymbolSession )
		this.load()
	}
	get otf() {
		return this[ SymbolOTF ]
	}
	get storage() {
		return this[ SymbolSession ]
	}
	load() {
		let m = this.storage.load()
		this.tokenId = m.tokenId || null
		this.email = m.email || null
		this.uid = m.uid || null
	}
	save() {
		this.storage.save( {
			tokenId: this.tokenId,
			email: this.email,
			uid: this.uid,
		} )
	}
	clear() {
		this.tokenId = null
		this.email = null
		this.uid = null
		this.storage.remove()
	}
}

export default Session

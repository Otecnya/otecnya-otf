import { SymbolUri, SymbolApiKey, SymbolTransport, SymbolAuth, SymbolSimpleTransportStorage, SymbolSession, SymbolDatabase } from './Symbols'
import TransportFetch from './TransportFetch'
import Auth from './Auth'
import TransportStorage from './TransportStorage'
import Session from './Session'
import Database from './Database'

export class OTF {
	constructor( {
		url,
		key,
	} = {} ) {
		this[ SymbolUri ] = url
		this[ SymbolApiKey ] = key
		this[ SymbolTransport ] = new TransportFetch( this )
		this[ SymbolAuth ] = new Auth( this )
		this[ SymbolSimpleTransportStorage ] = new TransportStorage( this )
		this[ SymbolSession ] = new Session( this )
		this[ SymbolDatabase ] = new Database( this )
	}
	get url() {
		return this[ SymbolUri ]
	}
	get key() {
		return this[ SymbolApiKey ]
	}
	get transport() {
		return this[ SymbolTransport ]
	}
	get auth() {
		return this[ SymbolAuth ]
	}
	get storage() {
		return this[ SymbolSimpleTransportStorage ]
	}
	get session() {
		return this[ SymbolSession ]
	}
	get database() {
		return this[ SymbolDatabase ]
	}
}

export default OTF

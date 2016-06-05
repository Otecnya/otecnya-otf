import { SymbolUri, SymbolApiKey, SymbolTransport, SymbolAuth, SymbolSimpleTransportStorage, SymbolSession, SymbolDatabase } from './Symbols'


export class OTF {
	constructor( {
		url,
		key,
	} = {} ) {
		this[ SymbolUri ] = url
		this[ SymbolApiKey ] = key
		this[ SymbolTransport ] = new OTFTransportFetch( this )
		this[ SymbolAuth ] = new OTFAuth( this )
		this[ SymbolSimpleTransportStorage ] = new OTFTransportStorage( this )
		this[ SymbolSession ] = new OTFSession( this )
		this[ SymbolDatabase ] = new OTFDatabase( this )
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

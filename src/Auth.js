import { SymbolOTF } from './Symbols'


export class Auth {
	constructor( otf ) {
		this[ SymbolOTF ] = otf
	}
	get otf() {
		return this[ SymbolOTF ]
	}
	get currentUser() {
		if ( this.otf.session.tokenId != null ) {
			return this.otf.session
		} else {
			return null
		}
	}
	signOut() {
		this.otf.session.clear()
		return Promise.resolve( this )
	}
	signInWithEmailAndPassword( email, password ) {
		return this
			.otf
			.transport
			.request( {
				url: 'auth/sign_in_with_email_and_password',
				data: {
					email,
					password,
				},
			} )
			.then( ( res ) => {
				if ( res.status === 200 ) {
					return res.json()
				} else {
					return Promise.reject( new Error( 'Error response server' ) )
				}
			} )
			.then( body => {
				if ( body.tokenId && body.uid ) {
					this.otf.session.tokenId = body.tokenId
					this.otf.session.email = body.email
					this.otf.session.uid = body.uid
					this.otf.session.save()
					return Promise.resolve( this )
				} else {
					return Promise.reject( new Error( 'Error authentication there are not tokenId and uid values.' ) )
				}
			} )
	}
}

export default Auth

// import {} from './Symbols'
import Transport from './Transport'


export class TransportFetch extends Transport {
	constructor( otf ) {
		super( otf )
	}
	request( {
		url,
		data,
	} ) {
		return fetch( `${this.otf.url}${url}`, {
			method: 'POST',
			body: JSON.stringify( data ),
			headers: {
				Authorization: Transport.generateStringHeader( {
					'Token_Id': this.otf.session.tokenId,
				} ),
			},
		} )
	}
}

export default TransportFetch

import partition from './partition';

describe( 'partition', () => {
	it( 'return an empty object when a null collection is provided', () => {
		expect( partition( null, ( i ) => String( i ) ) ).toEqual( {} );
	} );

	it( 'return an empty object when an undefined collection is provided', () => {
		expect( partition( undefined, ( i ) => String( i ) ) ).toEqual( {} );
	} );

	it( 'returns the correct partition', () => {
		expect(
			partition( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], function isEven( i ) {
				if ( i % 2 == 0 ) {
					return 'even';
				}

				return 'odd';
			} )
		).toEqual( {
			even: [ 2, 4, 6, 8, 10 ],
			odd: [ 1, 3, 5, 7, 9 ],
		} );

		expect(
			partition( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], function self( i ) {
				return String( i );
			} )
		).toEqual( {
			'1': [ 1 ],
			'2': [ 2 ],
			'3': [ 3 ],
			'4': [ 4 ],
			'5': [ 5 ],
			'6': [ 6 ],
			'7': [ 7 ],
			'8': [ 8 ],
			'9': [ 9 ],
			'10': [ 10 ],
		} );
	} );
} );

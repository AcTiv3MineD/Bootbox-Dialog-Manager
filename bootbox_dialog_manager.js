/*!
 *  Bootbox Dialog Manager.js to easely control multiple Bootbox at one time.
 *
 *  @version 1.0.0
 *  @license MIT
 *  @site    https://github.com/AcTiv3MineD/Bootbox-Dialog-Manager
 *  @author  Augusto Vargas <avargas@inspira.do>
 */
 
var dialog_manager = {
	dialogs: [ ],
	/**
     * Add/register a new bootbox element.
     *
     * @param id {string} The id of the bootbox element
     * @param dialog {bootbox} The bootbox element
     *
     * @return void
     */
	add: function ( id, dialog ) {
		this.dialogs[ id ] = dialog;
	},

	/**
     * Remove all registered elements.
     *
     * @return void
     */
	remove_all: function ( ) {
		for ( var i = dialogs.length - 1; i >= 0; i-- ) {
			this.dialogs[ i ].modal( 'hide' );
		}
		this.dialogs = [ ];
		$( '.modal-backdrop' ).remove( );
	},

	/**
     * Remove a given registered element.
     *
     * @param id {string} The id of the bootbox element
     *
     * @return void
     */
	remove: function( id ){
		if( this.dialogs[ id ] == undefined ) return;
		this.dialogs[ id ].modal( 'hide' );
		delete this.dialogs[ id ];

		if( this.dialogs.length == 0 ){
			$( '.modal-backdrop' ).remove( );
		}
	},

	/**
     * Get a given registered element.
     *
     * @param id {string} The id of the bootbox element
     *
     * @return {bootbox object} if not found null is returned
     */
	get: function( id ){
		if( this.dialogs[ id ] == undefined ) return null;

		return this.dialogs[ id ];
	}
};
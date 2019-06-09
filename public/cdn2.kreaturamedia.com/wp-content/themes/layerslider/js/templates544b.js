jQuery(document).ready(function($) {
	setTimeout(function(){


		var	Shuffle = window.shuffle,
			element = jQuery( '#ls-import-modal-window .inner .items' );

		if( element.length ) {
			shuffle = new Shuffle(element, {
				itemSelector: '.item',
				speed: 400,
				easing:'ease-in-out',
				delimeter: ','
			});

			$comingSoon = jQuery( '.coming-soon' );

			jQuery( '#ls-import-modal-window .inner nav li' ).on( 'click', function(){
				jQuery(this).addClass('active').siblings().removeClass('active');
				shuffle.filter( jQuery(this).data( 'group' ) );
				if( !jQuery( '.shuffle .shuffle-item--visible' ).length ){
					$comingSoon.addClass( 'visible' );
				}else{
					$comingSoon.removeClass( 'visible' );
				}
			});
		}

	}, 100 );
});
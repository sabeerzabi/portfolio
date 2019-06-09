// Removing Codecanyon frame
if( document.referrer.indexOf( 'codecanyon' ) != -1 ){
	top.location = self.location.href;
}


/* LayerSlider Web */



jQuery( document ).ready( function( $ ){

	var lsweb = {

		init: function(){

			lsweb.setNavigation();

			kmUI.smartResize.init( '#footer .inner' );

			kmUI.lsLogo.append( '#layerslider-logo', {
				animate: false
			});

			lsweb.setFeatures();

			$( window ).on( 'scroll', function(){
				lsweb.winScrollTop = $( window ).scrollTop();
				lsweb.setHeader();
				lsweb.checkFeatures();
			});

			$( window ).on( 'resize', function(){
				lsweb.winWidth = $( window ).width();
				lsweb.winHeight = $( window ).height();
				lsweb.resize();
			});

			$( window ).trigger( 'resize' );
			$( window ).trigger( 'scroll' );

			$( '#home-why .sizer' ).one( 'click', function(){
				TweenMax.to( $( 'html, body' ).get(), 15, {
					scrollTop: $('body').height() - lsweb.winHeight,
					ease: Sine.easeInOut
				});
			});
		},

		setNavigation: function(){

			$( '#mobilemenu select' ).on( 'change', function() {
				document.location.href = $(this).children( ':selected' ).data( 'url' );
			});

			if(
				KM.isHome ||
				KM.page === 'features'
			){
				TweenMax.fromTo( $( 'header' )[0], 1, {
					immediateRender: false,
					y: -$( 'header' ).outerHeight(),
					opacity: 0,
					display: 'block'
				},{
					delay: KM.isHome ? 5.5 : 2,
					ease: Quint.easeInOut,
					y: 0,
					opacity: 1,
					onComplete: function(){
						$( 'header nav > a').first().addClass( 'active' );
						kmUI.textUnderline.init({
							marginTop: -10,
							selector: '.km-ui-text-underline > a:not(.button)'
						});
					}
				});

			}else{
				var url = document.location.href.split( 'kreaturamedia.com/index.html' )[1] || '',
					page = url.split( 'https://layerslider.kreaturamedia.com/' )[0];

				if( page ){
					$( 'header nav > a[href*=' + page +']').addClass( 'active' );
				}

				$( 'header' ).css( 'display', 'block' );
				$( 'body' ).removeClass( 'dark-menu' );
				$( '#layerslider-logo' ).addClass( 'layerslider-logo-animated' );

				kmUI.textUnderline.init({
					marginTop: -10,
					selector: '.km-ui-text-underline > a:not(.button)'
				});
			}
		},

		setHeader: function(){

			if( KM.isHome ){
				if( lsweb.winScrollTop > 100 ){
					if( $( 'body' ).hasClass( 'dark-menu' ) ){
						$( 'body' ).removeClass( 'dark-menu' );
						$( '#layerslider-logo' ).addClass( 'layerslider-logo-animated' );
					}
				}else{
					if( ! $( 'body' ).hasClass( 'dark-menu' ) ){
						$( 'body' ).addClass( 'dark-menu' );
						$( '#layerslider-logo' ).removeClass( 'layerslider-logo-animated' );
					}
				}
			}
		},

		resize: function(){

			$( '.feature-transition-wrapper' ).each(function(){
				$(this).css({
					top: ( $(this).parent().height() - $(this).outerHeight() ) / 2 + 'px'
				});
			});

			$( '#feature-support .feature-transition-wrapper p' ).each(function(){
				$(this).css({
					fontSize: $(this).width() / 5 + 'px',
					lineHeight: $(this).height() + 'px'
				});
			});
		},

		setFeatures: function(){

			TweenMax.set( $( '#home-features article > img' ).get(), {
				opacity: 0,
				scale: 0.5
			});

			TweenMax.set( $( '#home-features article h4, #home-features article h5' ).get(), {
				opacity: 0,
				y: -20
			});

			TweenMax.set( $( '#home-features article .feature-list-wrapper li' ).get(), {
				transformPerspective: 400,
				opacity: 0
			});
		},

		checkFeatures: function(){

			$( '#home-features article:not(.animated)' ).each( function(){
				if( lsweb.winScrollTop + lsweb.winHeight * 0.65 > $(this).offset().top ){
					lsweb.animateFeatures( $(this) );
				}
			});
		},

		animateFeatures: function( $el ){

			var $img = $el.find( '> img:not(.noanimate)' ),
				$imgtr = $el.find( '> img:not(.noanimate), .feature-transition-wrapper:not(.noanimate)' ),
				$imgtr2 = $el.find( '> img:not(.noscale), .feature-transition-wrapper:not(.noscale)' ),
				$h3 = $el.find( '.feature-list-wrapper h3'),
				$h4 = $el.find( '.feature-list-wrapper h4'),
				$h5 = $el.find( '.feature-list-wrapper h5'),
				$ul = $el.find( '.feature-list-wrapper ul'),
				$li = $el.find( '.feature-list-wrapper li'),
				$border = $el.find( '> div .border'),
				title =	$h3.data( 'text' ),
				tl = new TimelineMax({
					paused: true,
					onStart: function(){
						$el.addClass( 'animated' );
					}
				}),
				duration = 1.2,
				left = $el.closest( 'article' ).hasClass( 'from-left' ) ? true : false;

			// Common

			if( $img.length ){

				tl.fromTo( $img[0], duration, {
					x: left ? 500 : -500,
					rotation: left ? 20 : -20
				},{
					ease: Quart.easeOut,
					scale: 1,
					rotation: $el.is( '#feature-dynamic' ) ? -2 : 0,
					opacity: 1,
					x: 0
				}, 0 );
			}

			if( $imgtr.length ){

				tl.to( $imgtr.get(), 0.1, {
					visibility: 'visible'
				}, 0 );
			}

			TweenMax.to( $imgtr2.get(), duration * 4, {
				delay: duration,
				immediateRender: false,
				repeat: -1,
				yoyo: true,
				ease: Sine.easeInOut,
				scale: 1.05
			});

			tl.to( $border[0], duration, {
				ease: Quart.easeInOut,
				height: '100%'
			}, 0 );

			tl.to( $h3[0], duration / 3, {
				ease: Linear.easeNone,
				text: title
			}, 0 );

			tl.staggerTo( [ $h4[0], $h5[0] ], duration / 2, {
				ease: Back.easeOut,
				opacity: 1,
				y: 0
			}, 0.1, 0 );

			tl.staggerFromTo( $li.get(), duration / 2, {
				transformOrigin: left ? '100% 50% 0' : '0% 50% 0',
				rotationY: left ? -90 : 90
			},{
				ease: Back.easeOut,
				rotationY: 0,
				opacity: 1,
				y: 0
			}, 0.05, 0.2 );

			// Optimization

			if( $el.is( '#feature-optimization' ) ){
				var height = 0;
				tl.staggerTo( $el.find( '.feature-transition-wrapper li div' ).get(), duration / 2, {
					height: function(){ return ( height += 20 ) + '%'; }
				}, 0.1, duration / 2 );
			}

			// Support

			if( $el.is( '#feature-support' ) ){
				tl.staggerFromTo( $el.find( '.feature-transition-wrapper p' ).get(), duration, {
					rotation: function(){ return ( Math.random() < 0.5 ? 1 : -1 ) * 360; }
				}, {
					rotation: 0,
					opacity: 1,
					ease: Quint.easeInOut
				}, 0.2, 0 );
			}

			// Templates

			if( $el.is( '#feature-templates' ) ){

				var xy = 9,
					templateElements = $el.find( '.feature-image, .feature-transition-wrapper img' ).get();

				tl.staggerFromTo( templateElements, duration, {
					opacity: 0,
					scale: 0.5,
					x: left ? 500 : -500,
					rotation: left ? 20 : -20,
					visibility: 'visible'
				}, {
					rotationY: -10,
					opacity: 1,
					x: function(){ return ( xy -= 1 ) * 3; },
					y: function(){ return ( xy ) * 3; },
					rotation: function(){ return xy; },
					scale: 1,
					ease: Quint.easeInOut
				}, 0.1, 0 );

				var loopTemplates = 9;
				TweenMax.staggerTo( templateElements, duration * 4, {
					delay: duration * 2,
					immediateRender: false,
					repeat: -1,
					yoyo: true,
					y: function(){ return loopTemplates -= 1; },
					rotation: function(){ return loopTemplates; },
					ease: Sine.easeInOut
				});
			}

			tl.play();
		}
	};

	lsweb.init();
});
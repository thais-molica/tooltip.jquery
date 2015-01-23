/**
 * Tooltip jQuery plugin 
 * Author: Thaís Molica
 * Library: jQuery 2.1.1
 * 
 *
 * Date: Thu Nov 13 2014 18:0:0 GMT-0300
 */
 
 ( function( $ ){

    $.fn.tooltip = function( options ) {
 
        var defaults = {
        	/* margin */
        	margin: 5 ,

        	/* center */
        	center: true ,

        	/* css */
    		default_css: 'jquery.tooltip/css/style-tooltip.css'
        } ,

        options = options || false ,
        settings = $.extend( {}, defaults, options ),
        base = this,
        $el = $( base ) ;

		base.loadcss = function( css ){
		    var head = document.getElementsByTagName( 'head' )[0], can_do_it = true ;

		    //verifiy if exists
		    $( 'link' ).each( function() {
		      if( $( base ).attr( 'href' ) == css ){
		        can_do_it = false ;
		      }
		    } ) ;

		    if( can_do_it ){
		      var link = document.createElement( 'link' ) ;

		      link.setAttribute( 'type', 'text/css' ) ;
		      link.setAttribute( 'rel', 'stylesheet' ) ;
		      link.setAttribute( 'href', css ) ;

		      head.appendChild( link ) ;
		    }
		} ;

        base.set_each_one = function( $el ){

        	$el.each( function() {

	        	$( this ).hover( function(){

	        		//cria o tooltip
		            $( "body" ).append( '<div class="tooltip">' +
		            	( ( typeof $( this ).data( 'tooltip' ) != 'undefined' ) ? $( this ).data( 'tooltip' ) : '' ) +
		            	( ( typeof $( this ).data( 'tooltip-img' ) != 'undefined' ) ? ( '<img src="' + $( this ).data( 'tooltip-img' ) + '" alt="' + $( this ).data( 'tooltip' ) + '">' ) : '' ) + '</div>' ) ;

		            offset = $( this ).offset() ;
		            tooltip = $(".tooltip") ;
		            tooltip_height = $(".tooltip").outerHeight() ;
		            tooltip_width = $(".tooltip").outerWidth() ;
		            obj_height = $( this ).height();
		            obj_width = $( this ).width();

		            //posisionamento - top
		            if ( offset.top < tooltip_height ) {
			            tooltip.offset( {
			            	top: offset.top + obj_height + settings.margin } ).addClass( 'bottom' ) ;
		            } else {
			            tooltip.offset( {
			            	top: offset.top - settings.margin - tooltip_height } ).addClass( 'top' ) ;
		            }

		            //posicionamento  - left
		            if ( offset.left + tooltip_width > window.innerWidth ) {
			            tooltip.offset( {
			            	left: window.innerWidth - tooltip_width } ).addClass( 'right' );
		            } else {
			            tooltip.offset( {
			            	left: offset.left } );
		            }

	        	} ) ;

	        	$( this ).mouseleave( function() {

	        		$(".tooltip").remove() ;

	        	} ) ;

	        } ) ;

        } ;

        base.init = function( $el ){

    		//carrega o css
    		base.loadcss( settings.default_css + '?' + settings.querystring ) ;

    		//init (setting each one)
        	base.set_each_one( $el ) ;

        } ;

		base.init( $el ) ;
 
    } ;



} ) ( jQuery ) ;
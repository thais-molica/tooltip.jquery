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
          'margin' : 5,
          'center' : true
        } ;
 
        var settings = $.extend( {}, defaults, options ) ;

        return this.each( function() {

        	var that = $(this);

        	that.hover( function() {

        		//cria o tooltip
	            $("body").append("<div class='tooltip'>" + that.data( "tooltip" )  + "</div>") ;

	            offset = that.offset() ;
	            tooltip = $(".tooltip") ;
	            tooltip_height = $(".tooltip").outerHeight() ;
	            tooltip_width = $(".tooltip").outerWidth() ;
	            obj_height = that.height();
	            obj_width = that.width();

	            //posisionamento - top
	            if ( offset.top < tooltip_height ) {
		            tooltip.offset( {
		            	top: offset.top + obj_height + settings.margin } ).addClass( "bottom" ) ;
	            } else {
		            tooltip.offset( {
		            	top: offset.top - settings.margin - tooltip_height } ).addClass( "top" ) ;
	            }

	            //posicionamento  - left
	            if ( offset.left + tooltip_width > window.innerWidth ) {
		            tooltip.offset( {
		            	left: window.innerWidth - tooltip_width } ).addClass( "right" );
	            } else {
		            tooltip.offset( {
		            	left: offset.left } );
	            }

        	} ) ;

        	that.mouseleave( function() {

        		$(".tooltip").remove() ;

        	} ) ;

        } ) ;
 
    }; 

} ) ( jQuery ) ;
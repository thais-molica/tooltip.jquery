var gulp = require( 'gulp' ) ;
var sass = require( 'gulp-sass' ) ;
var cssmin = require('cssmin');

gulp.task( 'tcharam', function() {
  gulp.src( './jquery.tooltip/sass/style-tooltip.scss' )
        .pipe( sass() )
        .pipe( gulp.dest('./jquery.tooltip/css') ) ;
} ) ;
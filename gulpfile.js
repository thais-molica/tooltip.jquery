var gulp = require( 'gulp' ) ,
	sass = require( 'gulp-sass' ) ;

gulp.task( 'sass', function() {
  gulp.src( './jquery.tooltip/sass/style-tooltip.scss' )
        .pipe( sass() )
        .pipe( gulp.dest('./jquery.tooltip/css') ) ;
} ) ;

gulp.task( 'watch', function() {
	gulp.watch( './jquery.tooltip/sass/*.scss', ['sass'] )
} ) ;
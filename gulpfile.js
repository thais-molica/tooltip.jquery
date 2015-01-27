var gulp = require( 'gulp' ) ,
	sass = require( 'gulp-sass' ) ,
	autoprefixer = require('gulp-autoprefixer');

gulp.task( 'sass', function() {
  gulp.src( './jquery.tooltip/sass/style-tooltip.scss' )
	  	.pipe(autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'] }))
        .pipe( sass() )
        .pipe( gulp.dest('./jquery.tooltip/css') ) ;
} ) ;

gulp.task( 'watch', function() {
	gulp.watch( './jquery.tooltip/sass/*.scss', ['sass'] )
} ) ;
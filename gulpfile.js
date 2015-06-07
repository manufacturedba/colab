'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('reload', function(){
    gulp.src('./views/**/*.jade')
        .pipe(livereload());
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch([
        './public/stylesheets/**/*.scss', 
        './public/javascripts/**/*.js',
        './views/**/*.*'
    ], ['reload']);
});

(function() {
'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

var DEST = 'dist/';

gulp.task('default', function() {
    return gulp.src('./src/script.js')
        .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(DEST));
});

}());
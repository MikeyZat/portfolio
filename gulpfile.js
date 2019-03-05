var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//SCSS -> CSS

var SCSS_SRC = './src/style/scss/**/*.scss';
var SCSS_DEST = './src/style/css';

//Compiling

gulp.task('compile_scss',  (done)=> {
    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.minx'}))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));
    done();
});

//listening for changes

gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC,gulp.series('compile_scss'));
});

//setting as a default task
//runing by typing 'gulp' in the console
gulp.task('default',gulp.series('watch_scss'));
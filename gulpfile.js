const gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  babel = require('gulp-babel'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  cssnext = require('postcss-cssnext'),

  browserSupport = ['last 2 versions', 'ie 10'],

  source = 'process/',
  dest = 'builds/masteringcode/';

gulp.task('html', function() {
  gulp.src(dest + '**/*.html');
});

// Regular CSS
gulp.task('css', function() {
  gulp.src(dest + '**/*.css');
});

// Post CSS
gulp.task('postcss', function() {
  gulp.src(source + 'postcss/style.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([
    cssnext({ browsers: browserSupport })
  ]))
  .on('error', gutil.log)
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dest + 'css'));
});

// Sass
gulp.task('sass', function() {
  gulp.src(source + 'scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dest + 'css'));
});

// JavaScript ES6
gulp.task('js', function() {
  gulp.src(source + 'js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest + 'js'));
});

gulp.task('watch', function() {
  gulp.watch(source + '**/*.js', ['js']);
  gulp.watch(dest + '**/*.css', ['css']); //CSS
  gulp.watch(source + 'postcss/**/*.css', ['postcss']); // PostCSS
  gulp.watch(source + 'scss/**/*.scss', ['sass']); // sass
  gulp.watch(dest + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
      port: 3000,
      open: true
    }));
});

gulp.task('default', ['html', 'sass', 'js', 'webserver','watch']);
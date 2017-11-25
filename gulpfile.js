const gulp = require('gulp'),
  webserver = require('gulp-webserver'),

  source = './',
  dest = './';

gulp.task('html', function() {
  gulp.src(dest + '**/*.html');
});

// Regular CSS
gulp.task('css', function() {
  gulp.src(dest + '**/*.css');
});

gulp.task('watch', function() {
  gulp.watch(source + '**/*.js', ['js']);
  gulp.watch(source + '**/*.css', ['css']); //CSS
  gulp.watch(source + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
<<<<<<< HEAD
      port: 3333,
=======
      port: 3000,
>>>>>>> 1765de3585aff4c819a2460e625324db10b82d22
      open: true
    }));    
});

gulp.task('default', ['webserver','watch']);
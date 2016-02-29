var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src([
      'src/models/**/*.js',
      'src/collections/**/*.js',
      'src/views/**/*.js',
      'src/index.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  return gulp.watch('src/**/*', ['default']);
});

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', ['vendors', 'build']);

gulp.task('vendors', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/underscore/underscore.js',
    'node_modules/backbone/backbone.js',
    'node_modules/bootstrap/dist/css/bootstrap.css'
  ])
  .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  return gulp.src([
      'src/models/**/*.js',
      'src/collections/**/*.js',
      'src/views/**/*.js',
      'src/index.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['vendors'], function() {
  return gulp.watch('src/**/*', ['build']);
});

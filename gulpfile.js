var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var assign = Object.assign || require('object.assign');
var del = require('del');
var vinylPaths = require('vinyl-paths');

/*
  Task to clean up dist-server
  directories
 */
gulp.task('clean', function() {
  return gulp.src('dist-server')
    .pipe(vinylPaths(del));
});

/*
  Task to compile server js code with babel
 */

gulp.task('build-server-js', function () {
  var compilerOptions = {
    modules: 'common',
    moduleIds: false,
    comments: false,
    compact: false,
    stage:2,
    optional: ["es7.decorators", "es7.classProperties"]
  };
  return gulp.src('src-server/**/*.js')
    .pipe(plumber())
    .pipe(changed('dist-server/', {extension: '.js'}))
    .pipe(sourcemaps.init())
    .pipe(babel(assign({}, compilerOptions, {modules:'common'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src-server/' }))
    .pipe(gulp.dest('dist-server/'));
});

/*
  Task to clean and build the entire application
 */
gulp.task('build', function(callback) {
  return runSequence('clean', 'build-server-js', callback);
});

/*
  Point default task to build
 */
gulp.task('default', ['build']);

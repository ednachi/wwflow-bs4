
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    connect = require('gulp-connect'),
    del = require('del');

var paths = {
  sassPath:   'res/sass',
  jsPath:     'res/js',
  nodeModules: 'node_modules'
}



// Font-Awesome
gulp.task('fa-icons', function() {
  return gulp.src(paths.nodeModules + '/font-awesome/fonts/**.*')
             .pipe(gulp.dest('./public/fonts'));
});

// CSS
gulp.task('css', function() {
  return gulp.src(paths.sassPath + '/style.scss')
             .pipe(sass({
               style: 'compressed',
               loadPath: [
                 paths.sassPath,
                 paths.nodeModules + '/bootstrap/scss',
                 paths.nodeModules + '/font-awesome/scss'
               ]
             }))
             .on("error", notify.onError(function (error) {
                return "Failed: " + error.message;
             }))
             .pipe(gulp.dest('./public/css'));
});

// Javascript
gulp.task('js', function() {
  return gulp.src([
    paths.nodeModules + '/bootstrap/dist/js/**.*',
    paths.nodeModules + '/jquery/dist/jquery.min.js',
    paths.nodeModules + '/jquery/dist/jquery.js',
    paths.nodeModules + '/jquery/dist/jquery.min.map',
    paths.nodeModules + '/tether/dist/js/tether.min.js',
    paths.nodeModules + '/tether/dist/js/tether.js'
  ])
  .pipe(gulp.dest('./public/js'));
});

// Others
gulp.task('default', ['css', 'js', 'fa-icons']);

gulp.task('clear', function() {
  del(['./public/fonts/*', './public/css/*', './public/js/*']);
});

gulp.task('watch', function() {
  gulp.watch(paths.sassPath + '/**/*.scss', ['css']);
});

gulp.task('serve', function() {
  connect.server({
    root: './public'
  });
});

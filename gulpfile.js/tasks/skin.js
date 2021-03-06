var config      = require('../config')
if(!config.tasks.skin) return

var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var gulp        = require('gulp')
var imagemin    = require('gulp-imagemin')
var path        = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.skin.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.skin.dest)
}

var imagesTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('skin', imagesTask)
module.exports = imagesTask

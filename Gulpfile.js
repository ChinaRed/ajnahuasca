var gulp = require('gulp');
var sass = require('gulp-sass');

//Task for SASS
gulp.task('styles', function(){
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./compartments/assets/styles'));
});

//Watch task
gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss', ['styles']);
});

//Default Task
gulp.task('default', ['watch', 'styles']);

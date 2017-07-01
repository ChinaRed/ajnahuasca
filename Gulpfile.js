var gulp = require('gulp');
var sass = require('gulp-sass');

//Task for SASS-build
gulp.task('build-css', function(){
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./compartments/assets/styles'));
});

//Task for Watch
  gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss', ['build-css']);
    gulp.watch('./assets/**/*.js');
  });

//Default Task
gulp.task('default', ['watch', 'build-css']);

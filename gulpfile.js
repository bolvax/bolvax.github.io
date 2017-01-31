var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');


var errorHandler = function(e) {
    this.emit('end');
};
var onError = function(err) {
    notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        sound: "Beep"
    })(err);
    this.emit('end');
};


gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass()).on('error', onError)
        .pipe(autoprefixer({browsers: ['> 1%', 'last 2 version', 'ie >= 8']}))
        .pipe(gulp.dest('./css'));
});


gulp.task('watch:sass', function() {
    gulp.watch('./sass/*.scss', ['sass']);
});
gulp.task('watch', ['watch:sass']);

gulp.task('build', ['sass']);

gulp.task('default', function () {
    gulp.start('watch');
});


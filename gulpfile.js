var gulp = require('gulp');
var gulpless = require('gulp-less');
var gulpautoprefixer = require('gulp-autoprefixer');

gulp.task('less',function(){
    var srcfile = './less/style.less';
    var srcresult = './style';
    return gulp.src(srcfile)
        .pipe(gulpless())
        .pipe(gulp.dest(srcresult));
});
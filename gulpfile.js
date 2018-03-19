const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const pug = require('gulp-pug');
const ts = require('gulp-typescript');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const concat = require('gulp-concat');


gulp.task('watch', () => {

    gulp.watch('app/sass/**/*', ['sass']);
    gulp.watch('app/**/*.pug', ['pug']);
    gulp.watch('app/js/**/*.ts', ['ts']);
    gulp.watch('app/js/**/*.js', ['js-concat']);
    

});
gulp.task('ts', function () {
    return gulp.src('app/js/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'ts.js'
        }))
        .pipe(gulp.dest('./assets/js'))
        .pipe(connect.reload());
});
gulp.task('sass', () => {
    sass('app/sass/style.scss', {
        sourcemap: true,
        style: 'compressed'
    })
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload())
});

gulp.task('pug', () => {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
});

gulp.task('js-concat', () => {
    return gulp.src(['./app/js/vendors/*.js', 'app/js/partials/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./assets/js'))
        .pipe(connect.reload());
});

gulp.task('connect', () => {
    connect.server({
        port: 8000,
        root: './',
        livereload: true
    })
});

gulp.task('default', ['connect', 'watch']);

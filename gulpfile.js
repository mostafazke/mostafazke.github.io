const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const ts = require("gulp-typescript");
const watch = require("gulp-watch");
const autoprefixer = require("gulp-autoprefixer");
const connect = require("gulp-connect");
const concat = require("gulp-concat");

gulp.task("views", () => {
  return gulp
    .src("app/pug/*.pug")
    .pipe(
      pug({
        pretty: true,
      }),
    )
    .pipe(gulp.dest("./"))
    .pipe(connect.reload());
});

gulp.task("styles", () => {
  return gulp
    .src("app/sass/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'})
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      }),
    )
    .pipe(gulp.dest("assets/css"))
    .pipe(connect.reload());
});

gulp.task("scripts", () => {
  return gulp
    .src("app/js/**/*.ts")
    .pipe(
      ts({
        noImplicitAny: true,
        outFile: "ts.js",
      }),
    )
    .pipe(gulp.dest("./assets/js"))
    .pipe(connect.reload());
});

gulp.task("js-concat", () => {
  return gulp
    .src(["./app/js/vendors/*.js", "app/js/partials/*.js"])
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("./assets/js"))
    .pipe(connect.reload());
});

gulp.task("watch", () => {
  return (
    gulp.watch("app/sass/**/*", gulp.series("styles")),
    gulp.watch("app/**/*.pug", gulp.series("views")),
    gulp.watch("app/js/**/*.ts", gulp.series("scripts")),
    gulp.watch("app/js/**/*.js", gulp.series("js-concat"))
  );
});

gulp.task("connect", () => {
  connect.server({
    port: 8000,
    root: "./",
    livereload: true,
  });
});

gulp.task("default", gulp.parallel("connect", "watch"));

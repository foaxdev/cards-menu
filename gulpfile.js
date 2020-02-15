const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const terser = require("gulp-terser");
const server = require("browser-sync").create();
const del = require("del");

gulp.task("css", () => {
    return gulp.src("src/sass/style.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("src/css"))
        .pipe(gulp.dest("public/css"))
        .pipe(server.stream());
});

gulp.task("js", () => {
    return gulp.src("src/js/script.js")
        .pipe(sourcemap.init())
        .pipe(terser())
        .pipe(rename("script.min.js"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("public/js"))
        .pipe(server.stream());
});

gulp.task("server", () => {
    server.init({
        server: "public/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("src/sass/**/*.scss", gulp.series("css"));
    gulp.watch("src/js/*.js", gulp.series("js"));
    gulp.watch(("src/*.html"), gulp.series("refresh"));
});

gulp.task("copy", () => {
    return gulp.src([
        "src/img/**",
        "src/js/*.js",
        "src/css/*.css"
    ], {
        base: "src"
    })
        .pipe(gulp.dest("public"));
});

gulp.task("clean", () => {
    return del("public");
});

gulp.task("build", gulp.series(
    "clean",
    "copy",
    "css",
    "js"
));

gulp.task("refresh", done => {
    server.reload();
    done();
});

gulp.task("start", gulp.series(
    "clean",
    "copy",
    "css",
    "js",
    "server"
));

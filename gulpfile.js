const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',

}

function css() {
    return src(paths.scss)
        .pipe(sass()).pipe(plumber())
        .pipe(dest('./build/css'));
}
function javaScript() {
    return src(paths.js)
        .pipe(dest('./build/js'));
}
function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javaScript);

}


exports.sass = sass;
exports.dev = parallel(css, watchArchivos, javaScript); 
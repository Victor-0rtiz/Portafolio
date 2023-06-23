const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');
const cache = require('gulp-cache');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'

}

function css() {
    return src(paths.scss)
    .pipe(sass())
    .pipe(plumber())
        .pipe(dest('./build/css'));
}
function javaScript() {
    return src(paths.js)
        .pipe(dest('./build/js'));
}
function watchArchivos(dn) {
    watch(paths.scss, css);
    watch(paths.js, javaScript);
    dn();

}
function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({optimizationLevel: 3})))
        .pipe(dest('build/img'))
}

function versionWebp(done) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function versionAvif() {
    const opciones = {
        quality: 50
    };
    return src('./src/img/*.{png,jpg}').pipe(avif(opciones)).pipe(dest('build/img'))
    
}


exports.sass = sass;
exports.imagenes = imagenes;
exports.versionAvif = versionAvif;
exports.default = parallel(css, watchArchivos, javaScript, versionAvif, versionWebp, imagenes); 
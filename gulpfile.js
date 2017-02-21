const path = require('path')

const gulp = require('gulp')
const flatten = require('gulp-flatten')
const clean = require('gulp-clean')
const concat = require('gulp-concat')

const pkg = require('./package.json')
const PROJECT_NAME = pkg.name
const DEPS = Object.keys(pkg.dependencies)

gulp.task('dialogs', [ 'clean', 'deps' ], () => {
  return gulp
    .src('src/**/dialogs/**')
    .pipe(gulp.dest('dist/'))
})

gulp.task('templates', [ 'clean', 'deps' ], () => {
  return gulp
    .src(['src/**/templates/**'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('i18n', [ 'clean', 'deps' ], () => {
  return gulp
    .src(['src/**/i18n/*'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('decorations', [ 'clean', 'deps' ], () => {
  return gulp
    .src(['src/**/decorations/**'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('js', [ 'clean', 'deps' ], () => {
  return gulp.src('src/**/webresources/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/'+ PROJECT_NAME))
})

gulp.task('css', [ 'clean', 'deps' ], () => {
  return gulp.src('src/**/webresources/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist/'+ PROJECT_NAME))
})

gulp.task('clean', () => {
  return gulp.src('dist')
    .pipe(clean())
})

gulp.task('deps', () => {
  const paths = DEPS.map((el) => {
    return 'node_modules/' + el + '/**/*'
  })

  return gulp.src(paths, {base: 'node_modules'})
    .pipe(gulp.dest('src'))
})

gulp.task('default', ['templates', 'dialogs', 'i18n', 'decorations', 'js'])

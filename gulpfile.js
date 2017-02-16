const path = require('path')

const gulp = require('gulp')
const flatten = require('gulp-flatten')
const clean = require('gulp-clean')
const concat = require('gulp-concat')

const PROJECT_NAME = require('./package.json').name

gulp.task('dialogs', [ 'clean' ], () => {
  return gulp
    .src('src/**/dialogs/**')
    .pipe(gulp.dest('dist/'))
})

gulp.task('templates', [ 'clean' ], () => {
  return gulp
    .src(['src/**/templates/**'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('i18n', [ 'clean' ], () => {
  return gulp
    .src(['src/**/i18n/*'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('decorations', [ 'clean' ], () => {
  return gulp
    .src(['src/**/decorations/**'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('js', [ 'clean' ], () => {
  return gulp.src('src/**/webresources/**/*.js')
    .pipe(concat(PROJECT_NAME + '.js'))
    .pipe(gulp.dest('dist/'+ PROJECT_NAME))
})

gulp.task('css', [ 'clean' ], () => {
  return gulp.src('src/**/webresources/**/*.css')
    .pipe(concat(PROJECT_NAME + '.css'))
    .pipe(gulp.dest('dist/'+ PROJECT_NAME))
})

gulp.task('clean', () => {
  return gulp.src('dist')
    .pipe(clean())
})

gulp.task('default', ['templates', 'dialogs', 'i18n', 'decorations', 'js'])

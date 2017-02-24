const path = require('path')

const gulp = require('gulp')
const flatten = require('gulp-flatten')
const concat = require('gulp-concat')

const pkg = require('./package.json')
const PROJECT_NAME = pkg.name
const DEPS = Object.keys(pkg.dependencies)

gulp.task('dialogs', [ 'deps' ], () => {
  return gulp
    .src('src/**/dialogs/**')
    .pipe(gulp.dest('dist/'))
})

gulp.task('templates', [ 'deps' ], () => {
  return gulp
    .src(['src/**/templates/**'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('i18n', [ 'deps' ], () => {
  return gulp
    .src(['src/**/i18n/*'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('decorations', [ 'deps' ], () => {
  return gulp
    .src(['src/**/decorations/**'])
    .pipe(gulp.dest('dist/'))
})

gulp.task('js', [ 'deps' ], () => {
  return gulp.src('src/**/webresources/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/'+ PROJECT_NAME + '/webresources'))
})

gulp.task('css', [ 'deps' ], () => {
  return gulp.src('src/**/webresources/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist/'+ PROJECT_NAME + '/webresources'))
})

gulp.task('deps', () => {
  const paths = DEPS.map((el) => {
    return 'node_modules/' + el + '/**/*'
  })

  return gulp.src(paths, {base: 'node_modules'})
    .pipe(gulp.dest('src'))
})

gulp.task('default', ['templates', 'dialogs', 'i18n', 'decorations', 'js', 'css'])

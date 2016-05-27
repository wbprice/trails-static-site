'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles'],
    compileTemplate: () => {
      return gulp.src('./assets/js/index.js')
        .pipe(babel({
          presets: ['react', 'es2015', 'stage-0']
        }))
        .pipe(gulp.dest('dist'))
    },
    compileStyles: () => {
      return gulp.src('./assets/style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
    }
  }

}

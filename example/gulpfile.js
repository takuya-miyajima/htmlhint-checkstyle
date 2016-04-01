"use strict";
var gulp = require("gulp");

process.env.HTMLHINT_CHECKSTYLE_FILE = 'outputExample.xml'

gulp.task('htmlhint', function() {
  var htmlhint = require('gulp-htmlhint');
  gulp.src(['index.html'])
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter('htmlhint-checkstyle'));
});
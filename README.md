# htmlhint-checkstyle
htmlhint reporter for checkstyle

## Background

htmlhint-checkstyle is checkstyle format reporter for Jenkins friendly,
by reference to [htmlhint-stylish](https://github.com/doshprompt/htmlhint-stylish)

## Install

```bash
$ npm install --save-dev htmlhint-checkstyle
```
## Usage

### [gulp-htmlhint](https://www.npmjs.com/package/gulp-htmlhint)

```javascript
var gulp = require('gulp');

gulp.task('htmlhint', function() {
  var htmlhint = require("gulp-htmlhint");
  gulp.src(['index.html'])
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter('htmlhint-checkstyle'))
    .pipe(htmlhint.failReporter({
      supress: true
    }));
});
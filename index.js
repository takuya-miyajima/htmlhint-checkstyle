var checkstyle = require('jshint-checkstyle-file-reporter'),
  path = require('path');

module.exports = function (file) {
  process.env.JSHINT_CHECKSTYLE_FILE = process.env.HTMLHINT_CHECKSTYLE_FILE || 'htmlhint-checkstyle.xml';
  return checkstyle.reporter(file.htmlhint.messages.map(function (errMsg) {
    return {
      file: errMsg.file,
      error: {
        severity: errMsg.error.type,
        character: errMsg.error.col,
        code: errMsg.error.rule.id,
        line: errMsg.error.line,
        reason: errMsg.error.message
      }
    };
  }));
};
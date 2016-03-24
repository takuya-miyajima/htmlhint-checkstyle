var checkstyle = require('jshint-checkstyle-file-reporter'),
    path = require('path');

process.env.JSHINT_CHECKSTYLE_FILE = 'htmlhint-checkstyle.xml';

module.exports = function(file) {
    return checkstyle.reporter(file.htmlhint.messages.map(function(errMsg) {
        return {
            file: path.relative(file.cwd, errMsg.file),
            error: {
                character: errMsg.error.col,
                code: errMsg.error.rule.id,
                line: errMsg.error.line,
                reason: errMsg.error.message
            }
        };
    }));
};
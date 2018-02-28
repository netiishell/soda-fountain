const css  = require('./index');
const less = require('gulp-less');

module.exports = (src, dist, options) => css(src, dist, options, less);

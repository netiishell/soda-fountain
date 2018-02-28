const css  = require('./index');
const sass = require('gulp-sass');

module.exports = (src, dist, options) => css(src, dist, options, sass);

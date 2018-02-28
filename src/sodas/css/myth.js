const css  = require('./index');
const myth = require('gulp-myth');

module.exports = (src, dist, options) => css(src, dist, options, myth);

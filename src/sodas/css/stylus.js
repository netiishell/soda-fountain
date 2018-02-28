const css    = require('./index');
const stylus = require('gulp-stylus');

module.exports = (src, dist, options) => css(src, dist, options, stylus);

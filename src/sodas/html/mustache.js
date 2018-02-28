const html      = require('./index');
const mustache  = require('gulp-mustache');

module.exports = (src, dist, options) => html(src, dist, options, mustache)

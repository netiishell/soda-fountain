const html     = require('./index');
const nunjucks = require('gulp-nunjucks');

module.exports = (src, dist, options) => html(src, dist, options, nunjucks.compile)

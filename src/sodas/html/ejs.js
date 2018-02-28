const ejs  = require('gulp-ejs');
const html = require('./index');

module.exports = (src, dist, options) => html(src, dist, options, ejs)

const html = require('./index');
const handlebars  = require('gulp-handlebars');

module.exports = (src, dist, options) => html(src, dist, options, handlebars)

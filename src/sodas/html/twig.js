const html = require('./index');
const twig = require('gulp-twig');

module.exports = (src, dist, options) => html(src, dist, options, twig)

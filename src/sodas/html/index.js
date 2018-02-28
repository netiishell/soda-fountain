const $       = require('gulp-load-plugins')();
const _       = require('lodash');
const config  = require('../../config');
const error   = require('../../error');
const gulp    = require('gulp');
const path    = require('path');

module.exports = (src, dist, _options = {}, template = $.util.noop) => {
  const options = _.merge(config.html, _options);

  return gulp.src(src)
    .pipe($.plumber(error))
    .pipe($.data(options.data))
    .pipe(template(options.template))
    .pipe($.if(options.compress.enabled, options.compress.minifier(options.compress.options)))
    .pipe($.rename({extname: '.html'}))
    .pipe(gulp.dest(dist))
    .pipe($.size({showFiles: true}))
};

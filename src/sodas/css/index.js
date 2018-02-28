const $       = require('gulp-load-plugins')();
const config  = require('../../config');
const error   = require('../../error');
const gulp    = require('gulp');
const path    = require('path');

module.exports = (src, dist, _options = {}, preprocessor = $.util.noop) => {
  const options = Object.assign(config.css, _options);

  return gulp.src(src)
    .pipe($.plumber(error))
    .pipe($.if(options.sourcemaps, $.sourcemaps.init()))
    .pipe(preprocessor(options.preprocessor))
    .pipe($.if(options.autoprefixer.enabled, $.autoprefixer(options.autoprefixer.option)))
    .pipe($.if(options.concat, $.concat(path.basename(dist))))
    .pipe($.if(options.compress.enabled, options.compress.minifier(options.compress.options)))
    .pipe($.if(options.compress.enabled, $.rename({suffix: options.suffix})))
    .pipe($.if(options.sourcemaps, $.sourcemaps.write('.')))
    .pipe(gulp.dest(options.concat ? path.dirname(dist) : dist))
    .pipe($.size({showFiles: true}))
};

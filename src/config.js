const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const env     = require('./env');

const config = {
  beep: true,
  notification: {
    enabled: true
  },
  production: env === 'production'
};

config.sourcemaps = !config.production;

// config.rev = {
//   enabled: true,
//   cssUrl: true,
//   manifest: {
//     enabled: false,
//     options: {}
//   }
// };

config.css = {
  autoprefixer: {
    enabled: true,
    options: {
      browsers: ['last 2 versions']
    }
  },
  concat: true,
  // http://goalsmashers.github.io/css-minification-benchmark/
  compress: {
    enabled: config.production,
    minifier: cssnano,
    suffix: '.min',
    options: {}
  },
  sourcemaps: config.sourcemaps
};

config.html = {
  compress: {
    enabled: config.production,
    minifier: htmlmin,
    options: {
      collapseWhitespace: true
    }
  }
};

module.exports = config;

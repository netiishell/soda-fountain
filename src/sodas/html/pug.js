const _    = require('lodash');
const html = require('./index');
const pug  = require('gulp-pug');

module.exports = (src, dist, options) => {
  options = _.merge({
    template: {
      pretty: true
    }
  }, options);

  return html(src, dist, options, pug);
};

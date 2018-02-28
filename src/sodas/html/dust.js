const _        = require('lodash');
const dusthtml = require('gulp-dust-html');
const html     = require('./index');


module.exports = (src, dist, options) => {
  options = _.merge({
    template: {
      data: options.data,
      whitespace: true
    }
  }, options);

  return html(src, dist, options, dusthtml);
};

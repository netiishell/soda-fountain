const config   = require('./config');
const beep     = require('beepbeep');
const notifier = require('node-notifier');
const truncate = require('truncate');
const util     = require('gulp-util');

module.exports = (error) => {
  util.log(util.colors.red(error));

  if(config.notification.enabled) {
    notifier.notify({
      title: `${error.name} in plugin '${error.plugin}'`,
      message: `${truncate(error.message.replace(/\n/g, ' '), 50, {ellipsis: '...'})} \nSee more on console.`
    });
  }

  if(config.beep) {
    beep();
  }

  if(typeof this.emit === 'function') {
    this.emit('end');
  }
};

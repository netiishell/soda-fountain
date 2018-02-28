const minimist = require('minimist');

module.exports = process.env.NODE_ENV || minimist(process.argv.slice(2)).env || 'development';

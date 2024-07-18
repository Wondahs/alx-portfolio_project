class logger {
  static http(message) {
    console.log(`HTTP: ${message}`);
  }

  static info(message) {
    console.log(`INFO: ${message}`);
  }

  static error(message) {
    console.error(`ERROR: ${message}`);
  }

  static warn(message) {
    console.warn(`WARNING: ${message}`);
  }

  static debug(message) {
    console.debug(`DEBUG: ${message}`);
  }
}

module.exports = logger;
const logger = require('../uploads/logger.js');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); /* log error stack to console */
    logger.error(err.message); /* Log error message using logger */
    res.status(500).json({ msg: 'Server error' });
};

module.exports = errorHandler;
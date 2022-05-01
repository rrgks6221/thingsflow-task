'use strict';

class Error {
  static ctrl(err) {
    return {
      success: false,
      clientMsg: 'Internal Server Error',
      err: err.stack,
      status: err.status || 500,
    };
  }
}

module.exports = Error;

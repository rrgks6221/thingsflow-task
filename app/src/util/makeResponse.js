'use strict';

module.exports = (status, clientMsg, moreInfo) => {
  const response = {
    success: status < 400,
    clientMsg,
    status,
  };

  for (const info in moreInfo) {
    if (Object.prototype.hasOwnProperty.call(moreInfo, info)) {
      response[info] = moreInfo[info];
    }
  }

  return response;
};

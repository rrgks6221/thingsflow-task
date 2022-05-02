'use strict';

const createError = require('http-errors');

const Error = require('../../src/util/Error');

describe('Error.ctrl', () => {
  it('500번 에러', () => {
    const err = Error.ctrl(createError(500));

    expect(err.clientMsg).toEqual('Internal Server Error');
    expect(err.status).toEqual(500);
  });
});

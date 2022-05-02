'use strict';

const makeResponse = require('../../src/util/makeResponse');

describe('응답 데이터 생성 로직', () => {
  it('200번대 moreInfo 없음', () => {
    const response = makeResponse(200, '클라이언트 메시지');

    expect(response).toEqual({
      success: true,
      clientMsg: '클라이언트 메시지',
      status: 200,
    });
  });

  it('200번대 moreInfo 있음', () => {
    const moreInfo = { temp1: 'temp1', temp2: 'temp2' };
    const response = makeResponse(200, '클라이언트 메시지', moreInfo);

    expect(response).toEqual({
      success: true,
      clientMsg: '클라이언트 메시지',
      status: 200,
      temp1: moreInfo.temp1,
      temp2: moreInfo.temp2,
    });
  });

  it('300번대', () => {
    const response = makeResponse(300, '클라이언트 메시지');

    expect(response).toEqual({
      success: true,
      clientMsg: '클라이언트 메시지',
      status: 300,
    });
  });

  it('400번대', () => {
    const response = makeResponse(400, '클라이언트 메시지');

    expect(response).toEqual({
      success: false,
      clientMsg: '클라이언트 메시지',
      status: 400,
    });
  });
});

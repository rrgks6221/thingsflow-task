'use strict';

const request = require('supertest');
const app = require('../../app');

const server = request(app);

describe('풀리피의 오늘의 운세', () => {
  it('인사말과 타로카드 GET 요청 성공 [200]', async () => {
    let response = await server
      .get('/api/pullipi/1')
      .set('Content-Type', 'application/json');

    response = JSON.parse(response.text);

    expect(response.success).toEqual(true);
    expect(response.msg).toEqual('타로카드 조회');
    expect(response.status).toEqual(200);
    expect(response.greetings).toEqual('오늘은 아무개의 운세가 어떨지');
    expect(response.tarotCards.length).toEqual(5);
  });

  it('인사말과 타로카드 GET 요청 성공 [404]', async () => {
    let response = await server
      .get('/api/pullipi/asd')
      .set('Content-Type', 'application/json');

    response = JSON.parse(response.text);

    expect(response).toEqual({
      success: false,
      msg: '해당 스킬은 존재하지 않습니다.',
      status: 404,
    });
  });
});

const request = require('supertest');
const app = require('../index');

describe('Basic app routes', () => {
  test('GET / returns 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('ok');
  });
});

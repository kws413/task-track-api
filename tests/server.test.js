const request = require('supertest');
const app = require('../server.js');

describe('Health Endpoints', () => {

    it('GET /health status is ok', async () => {
        return request(app)
            .get('/health')
            .expect(200)
            .then((response) => {
                expect(response.body.status).toBe('OK');
            });
    });
});

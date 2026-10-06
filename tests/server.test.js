const supertest = require('supertest');
const server = require('../server.js');

describe('Health Endpoints', () => {

    it('GET /health status is ok', async () => {
        const res = await supertest(server).get('/health');
            expect(res.status('OK'));
    });
});
